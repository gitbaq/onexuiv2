
export function getAddress(fullAddress) {
    if (fullAddress && fullAddress.length > 30) {
        return (fullAddress.slice(0, 4) + "..." + fullAddress.slice(-4));
    }
    return '...';
}

