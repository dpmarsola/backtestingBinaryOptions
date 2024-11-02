import DerivAPIBasic from "./lib/DerivAPIBasic.mjs";
import WebSocket from "ws";
import fs from "fs";

const home_dir = process.argv[2];
if ( home_dir == undefined) {
  throw new Error("Nome do arquivo de saida não informado");
}

try {
  const app_id = 1089; // Replace with your app_id or leave as 1089 for testing.
  const connection = new WebSocket(
    `wss://ws.derivws.com/websockets/v3?app_id=${app_id}`
  );
  const api = new DerivAPIBasic({ connection });

  const subscribeTicks = async () => {
    await tickStream();
    connection.addEventListener("message", tickResponse);
  };

  const unsubscribeTicks = () => {
    connection.removeEventListener("message", tickResponse, false);
    tickStream().unsubscribe();
  };

  const tickStream = () =>
    api.subscribe({
      ticks_history: "cryBTCUSD",
      adjust_start_time: 1,
      count: 10,
      end: "latest",
      granularity: 1800,
      start: 1,
      style: "candles",
    });

  const tickResponse = async (res) => {
    const data = JSON.parse(res.data);
    if (data.error !== undefined) {
      console.log("Error : ", data.error.message);
      connection.removeEventListener("message", tickResponse, false);
      await api.disconnect();
    }
    if (data.msg_type === "tick") {
      console.log(data.tick);
    }else if (data.msg_type === "candles") {
        
      let output = "[ ";

      for (let i = 0; i < data.candles.length; i++) {

        let start_time = data.candles[i].epoch;
        let open = data.candles[i].open;
        let high = data.candles[i].high;
        let low = data.candles[i].low
        let close = data.candles[i].close;
        let volume = 9999;
        let end_time = data.candles[i].epoch + 1800;

        output = output + "[ " + start_time + ", '"+ open + "' , '" + high + "' , '" + low + "' , '" + close + "' , '" + volume + "' , " + end_time + " ]" + ",";

      }

      output = output + " ]" + "\n";
      let thisdate = new Date(Date.now());
      let filename = home_dir + '/datasource/Deriv_30m_' + thisdate.getDay() + '_' + thisdate.getMonth() + '_' + thisdate.getFullYear() + '_' + thisdate.getHours() + '_' + thisdate.getMinutes() + '_' + thisdate.getSeconds() + '.txt';
      fs.appendFile(filename, output, (err) => {

        // In case of a error throw err.
        if (err) throw err;
      });

      unsubscribeTicks();
      console.log(thisdate + " - Arquivo gerado corretamente: " + filename);
      connection.close();
     
    }

  }

  subscribeTicks();

}
catch (error) {
  console.log("Error : ", error);
}