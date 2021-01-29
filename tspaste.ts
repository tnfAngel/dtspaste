import {
  JqAjaxGetManager,
  JqAjaxPostManager,
  JsHelper,
  UserInteraction,
} from "./deps.ts";
const baseURL = "https://jspaste.tnfangel.repl.co";

export class publicar {
  async publicar(texto: string) {
    let obtenido = null;
    var userInteraction = new UserInteraction();
    var jsHelper = new JsHelper();
    var ajaxPostMgr = new JqAjaxPostManager();
    ajaxPostMgr.userInteraction = userInteraction;
    ajaxPostMgr.jsHelper = jsHelper;
    await ajaxPostMgr.performAjaxPostJson(`${baseURL}/documents`, texto, {
      successCallback: function (result: { key: any }) {
        return obtenido = `${baseURL}/${result.key}`;
      },
    }, {
      failureCallback: function (textStatus: string, errorThrown: any) {
        console.log("[jspaste Error]: " + textStatus);
      },
    });
    return this;
  }
}

export class obtener {
  async obtener(a: string) {
    let obtenido = null;
    const userInteraction = new UserInteraction();
    var jsHelper = new JsHelper();
    var ajaxGetMgr = new JqAjaxGetManager();
    ajaxGetMgr.userInteraction = userInteraction;
    ajaxGetMgr.jsHelper = jsHelper;
    ajaxGetMgr.performAjaxGetJson;
    await ajaxGetMgr.performAjaxGetJson(`${baseURL}/documents/${a}`, {
      successCallback: function (result: any) {
        obtenido = result;
      },
    }, {
      failureCallback: function (textStatus: string, errorThrown: any) {
        console.log("[jspaste Error]: " + textStatus);
      },
    });
    return this;
  }
}
