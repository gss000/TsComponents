/**
 * 获取元素样式
 */
export function getElementStyle(ele, attr) {
	if (window.getComputedStyle) {
		return window.getComputedStyle(ele)[attr];
	} else {
		return ele.currentStyle[attr];
	}
}

/**
 * 计算元素位置
 */
export function getMiddlePosition(ele) {
	if (ele) {
		const height = getElementStyle(ele, 'height');
		console.log('util:', height);
		return 50;
	}

	return 0;
}
