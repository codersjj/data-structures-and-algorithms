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

function getDay(high, up, down) {
  let height = 0
  let day = 0
  while (height < high) {
    day++
    height += up
    if (height >= high) {
      return day
    }
    height -= down
  }
  return day
}

console.log(getDay(10, 2, 1))