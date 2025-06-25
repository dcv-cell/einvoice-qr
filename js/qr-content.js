// 生成便捷开票二维码内容
// 依赖 crc16.js
function generateEinvoiceQRContent({ name, taxId, addressPhone, bankAccount }) {
    // 字段间分隔符
    const SEP = '</>';
    // 地址电话、开户行账号内部用 | 分隔
    const addressPhoneStr = addressPhone.replace(/\s+/g, ''); // 去除空格
    const bankAccountStr = bankAccount.replace(/\s+/g, '');
    // 拼接核心数据
    let core = [name, taxId, addressPhoneStr, bankAccountStr].join(SEP);
    // 计算CRC
    const crc = crc16(core);
    // 拼接带CRC的核心数据
    const coreWithCRC = core + SEP + crc;
    // base64编码
    const base64Core = btoa(unescape(encodeURIComponent(coreWithCRC)));
    // 最终二维码内容
    return `$01${base64Core}$`;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = generateEinvoiceQRContent;
} else {
    window.generateEinvoiceQRContent = generateEinvoiceQRContent;
} 