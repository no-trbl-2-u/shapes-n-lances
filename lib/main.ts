import {boot} from "./engine";
import {log} from "./common";
import {render} from "./engine/hook/render";
import {prep} from "./test";

async function run() {
    try {
        log("RUN", "booting...");

        await boot();

        log("RUN", "boot complete");
        log("RUN", "star test prep");

        prep();

        log("RUN", "start render");
        render();

    } catch (e) {
        log("ERROR", JSON.stringify(e));
    }
}

run()
    .catch(e => {
        log("ERROR", JSON.stringify(e));
    });


