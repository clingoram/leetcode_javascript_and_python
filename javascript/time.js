/**
 * 計算程式執行時間
 * 
 * function XXX (){
 *  const timer = new ExecutionTimer();
 * 
 *  timer.execute(() => {
 *      // 放置欲計算執行之程式碼
 *  });
 *  return result;
 * }
 * 
 */
export class ExecutionTimer {
  constructor() {
    this.startTime = null;
    this.endTime = null;
  }


  /**
   * 記錄程式碼開始執行的時間
   */
  start() {
    this.startTime = performance.now();
    // this.runProgramName = ProgramName;
  }

  /**
   * 記錄程式碼結束執行的時間
   */
  end() {
    this.endTime = performance.now();
  }

  /**
   * 計算並返回 endTime 和 startTime 之間的差值（執行時間），以毫秒為單位。
   * 如果 start()或 end()尚未被調用，則發出警告並返回 null。
   * @returns 
   */
  getTime(){
    if (this.startTime === null || this.endTime === null) {
      console.warn("請先調用 start() 和 end() 方法。");
      return null;
    }
    return this.endTime - this.startTime;
  }

  /**
   * 取得執行時間並以指定的標籤輸出到控制台
   * @param {*} label 
   */
  logTime(label = "程式碼片段") {
    const executionTime = this.getTime();
    if (executionTime !== null) {
        console.log(`${label} 執行時間：${executionTime.toFixed(2)} 毫秒`);
    }
  }

  /**
   * callback function（想測量執行時間的程式碼）和一個可選的標籤。
   * 會自動調用 start()、執行回呼函數、調用 end()，然後使用指定的標籤記錄執行時間。
   * @param {*} callback 
   * @param {string} label 
   */
  execute(callback, label = "程式碼片段") {
    this.start();
    callback();
    this.end();
    this.logTime(label);
  }
}