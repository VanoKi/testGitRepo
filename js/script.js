function formatPhoneNumber(phoneNumber) {
    const cleaned = phoneNumber.toString()

    if (cleaned.length !== 10) {
        return "Error";
    }

    return cleaned.replace(/(\d{3})(\d{3})(\d{2})(\d{2})/, '+($1)-$2-$3-$4');
}

console.log(formatPhoneNumber("9123456789"));

