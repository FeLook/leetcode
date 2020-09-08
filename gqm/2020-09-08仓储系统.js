/**
 * 实现一个仓储系统，可以校验是否
 */

class Depository {
  constructor(option) {
    this.wareHouse = {};
    this.diffHoust = {};
  }

  flat(obj, key = "", res = {}, isArray = false) {
    for (let [k, v] of Object.entries(obj)) {
      if (Array.isArray(v)) {
        let tmp = isArray ? key + "[" + k + "]" : key + k;
        this.flat(v, tmp, res, true);
      } else if (typeof v === "object") {
        let tmp = isArray ? key + "[" + k + "]." : key + k + ".";
        this.flat(v, tmp, res);
      } else {
        let tmp = isArray ? key + "[" + k + "]" : key + k;
        res[tmp] = v;
      }
    }
    return res;
  }

  transferIn(data) {
    const newData = this.flat(data);
    for (let n in newData) {
      if (!this.wareHouse[n]) {this.wareHouse[n] = newData[n]}else {
        this.wareHouse[n] += newData[n];
      }
      
    }
    console.log("存储成功", this.wareHouse);
  }

  transferOut(data) {
    this.diffHoust = this.flat(data);
    for (let n in this.diffHoust) {
      if (!this.wareHouse[n]) {
        console.log("当前类目不存在，爆仓了");
        break;
      }
      if (this.wareHouse[n] - this.diffHoust[n] < 0) {
        console.log("当前类目商品不够，爆仓了");
        break;
      }
      this.wareHouse[n] -= this.diffHoust[n];
    }
  }


}

const newObject = new Depository();

newObject.transferIn({ parductA: { a: 1, b: 1, c: { c1: 1, c2: 2 } } });
// newObject.transferIn({ parductB: { a: 10, b: 1, c: { c1: 1, c2: 2 } } });
