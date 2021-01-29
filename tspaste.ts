import { JqAjaxPostManager, JqAjaxGetManager, JsHelper, UserInteraction } from "./deps.ts";
const baseURL = 'https://jspaste.tnfangel.repl.co'

export class publicar {
    input: string;

    constructor(message: string) {
        this.input = message;
    }

    async texto() {
        let obtenido = null
        var userInteraction = new UserInteraction();
        var jsHelper = new JsHelper();
        var ajaxPostMgr = new JqAjaxPostManager();
        ajaxPostMgr.userInteraction = userInteraction;
        ajaxPostMgr.jsHelper = jsHelper;
        await ajaxPostMgr.performAjaxPostJson(`${baseURL}/documents`, this.input, {
            successCallback: function (result) {
                return obtenido = `${baseURL}/${result.key}`
            }
        },
        {
            failureCallback: function (textStatus, errorThrown) {
            console.log("[jspaste Error]: "+textStatus)
            }
        });
        return this;
    }
}

export class obtener {
    input: string;

    constructor(message: string) {
        this.input = message;
    }

    async obtener() {
        let obtenido = null
        const userInteraction = new UserInteraction();
        var jsHelper = new JsHelper();
        var ajaxGetMgr = new JqAjaxGetManager();
        ajaxGetMgr.userInteraction = userInteraction;
        ajaxGetMgr.jsHelper = jsHelper;
        ajaxGetMgr.performAjaxGetJson
        await ajaxGetMgr.performAjaxGetJson(`${baseURL}/documents/${a}`, {
            successCallback: function (result) {
                obtenido = result;
            }
        },
        {
            failureCallback: function (textStatus, errorThrown) {
                console.log("[jspaste Error]: "+res)
            }
        });
        return this;
    }
}