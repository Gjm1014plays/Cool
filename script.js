// List of blocked IP addresses
const blockedIPs = ['10.109.8.147'];

// Function to check if an IP address is blocked
function isBlocked(ipAddress) {
    return blockedIPs.includes(ipAddress);
}

// Function to perform actions when a request is received
function onRequestReceived(request) {
    const ipAddress = request.ipAddress; // Assuming request object contains IP address

    if (isBlocked(ipAddress)) {
        // Simulate blocking behavior
        console.log(`Request from ${ipAddress} is blocked.`);
        // You can choose to redirect, display an error message, or perform other actions here
    } else {
        // Process the request normally
        console.log(`Request from ${ipAddress} is allowed.`);
    }
}

// Example usage
const request1 = { ipAddress: '10.109.8.147' };
const request2 = { ipAddress: '192.168.1.100' };

onRequestReceived(request1); // This should be blocked
onRequestReceived(request2); // This should be allowed
