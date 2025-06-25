// CRC-16算法实现，适用于便捷开票二维码
// 多项式：0x8005（即X^16+X^15+X^2+1），高位在前，低位在后

function crc16(str) {
    let crc = 0x0000;
    for (let i = 0; i < str.length; i++) {
        crc ^= (str.charCodeAt(i) << 8);
        for (let j = 0; j < 8; j++) {
            if ((crc & 0x8000) !== 0) {
                crc = ((crc << 1) ^ 0x8005) & 0xFFFF;
            } else {
                crc = (crc << 1) & 0xFFFF;
            }
        }
    }
    // 高位在前，低位在后，输出4位16进制字符串
    return crc.toString(16).toUpperCase().padStart(4, '0');
}

// 导出
if (typeof module !== 'undefined' && module.exports) {
    module.exports = crc16;
} else {
    window.crc16 = crc16;
} 