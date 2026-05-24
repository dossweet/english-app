/**
 * 基于日期决定今天展示哪些词条。
 * 每天固定展示 id 连续的一段，保证一天内稳定、每天不重复。
 * 当词库足够大时，遍历完一轮后自动从头开始。
 * 
 * 算法：
 * - 用当天日期计算一个起始偏移 startOffset
 * - 从该偏移开始取 DAILY_COUNT 个词条
 * - 如果溢出则循环取（从头继续）
 */

export const DAILY_COUNT = 30;

/**
 * 获取今天展示的词条 ID 范围
 * @param totalCount 词库总词条数
 * @returns 今天要展示的词条 id 数组（基于 dateSeed 稳定排序后的索引）
 */
export function getTodaysIds(totalCount: number): number[] {
  if (totalCount === 0) return [];

  // 用日期生成一个稳定的种子数
  const today = new Date();
  // 用 YYYYMMDD 作为种子，确保每天不同、全天稳定
  const dateSeed = 
    today.getFullYear() * 10000 +
    (today.getMonth() + 1) * 100 +
    today.getDate();

  // 使用种子生成一个伪随机排列的起始偏移
  const startOffset = seededRandom(dateSeed, totalCount);

  // 从 startOffset 开始取 DAILY_COUNT 个，循环取
  const ids: number[] = [];
  // 词条 id 从 1 到 totalCount
  const allIds = Array.from({ length: totalCount }, (_, i) => i + 1);

  for (let i = 0; i < DAILY_COUNT; i++) {
    const index = (startOffset + i) % totalCount;
    ids.push(allIds[index]);
  }

  return ids;
}

/**
 * 简单的伪随机函数，给定种子在 [0, max) 范围内返回一个整数。
 * 保证同一种子永远返回同一结果。
 */
function seededRandom(seed: number, max: number): number {
  // 使用简单的线性同余生成器，确保相同的种子产生相同的结果
  let h = seed;
  h = ((h * 9301 + 49297) % 233280) ^ h;
  h = ((h * 49297 + 9301) % 233280);
  return Math.abs(h) % max;
}

/**
 * 获取今天日期字符串 YYYY-MM-DD
 */
export function getTodayKey(): string {
  const today = new Date();
  return `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
}
