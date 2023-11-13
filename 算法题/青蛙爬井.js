/*
有一口深度为 high 米的水井，井底有一只青蛙，它每天白天能够沿井壁向上爬 up 米，夜里则顺井壁向下滑 down 米，若青蛙从某个早晨开始向外爬，对于任意指定的 high、up 和 down 值（均为自然数），计算青蛙多少天能够爬出井口？

输入
输入 3 个正整数：high、up 和 down。

输出
输出一个整数，表示天数。输出单独占一行。

样例输入
10 2 1

样例输出
9

*/

/*
10 2 1
第 1 天：白天 up 2 米，到达 2 米处，晚上 down 1 米，到达 1 米处；
第 2 天：白天 up 2 米，到达 3 米处，晚上 down 1 米，到达 2 米处；
第 3 天：白天 up 2 米，到达 4 米处，晚上 down 1 米，到达 3 米处；
...
第 8 天：白天 up 2 米，到达 9 米处，晚上 down 1 米，到达 8 米处；
第 9 天：白天 up 2 米，到达 10 米处，成功爬出井口。
*/

function getDay(high, up, down) {
  let day = 0
  let height = 0
  while (height < high) {
    day++
    height += up
    if (height >= high) { // 青蛙成功爬出井口，不再进行夜晚的滑落
      return day
    }
    height -= down
  }
  return day
}

const count = getDay(10, 2, 1)
console.log(count)
