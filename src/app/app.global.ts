export class AppGlobal{

    private static instance: AppGlobal = new AppGlobal();
    /**是否是调试状态 */
    isDebug: boolean = true;
    server: string = this.isDebug ? "http://localhost:8086" : "http://www.xxx.com";
    imageCdn:string = this.isDebug ? "http://localhost:8086" : "http://www.xxx.com";
    apiUrl: string = this.server;
    constructor() {
        if (AppGlobal.instance) {
            throw new Error("错误: 请使用AppGlobal.getInstance() 代替使用new.");
        }
        AppGlobal.instance = this;
    }

    /**
     * 获取当前实例
     *
     * @static
     * @returns {AppGlobal}
     */
    public static getInstance(): AppGlobal {
        return AppGlobal.instance;
    }



}
