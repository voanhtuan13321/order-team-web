import * as os from 'os';

/**
 * Retrieves the network address of the application based on the available network interfaces.
 *
 * @param port The port number the application is listening on.
 * @returns The network address as a string.
 */
function getNetworkAddress(port: number): string {
  const networkInterfaces = os.networkInterfaces();
  return (
    Object.values(networkInterfaces)
      .flat()
      .filter((iface) => iface?.family === 'IPv4' && !iface.internal)
      .map((iface) => `http://${iface?.address ?? 'N/A'}:${port}`)[0] ?? 'N/A'
  );
}

/**
 * Logs information about the Nest.js application's availability on the
 * network to the console. The information includes the local address and
 * the network address.
 *
 * @param port The port number the application is listening on.
 */
export function logApplicationAddresses(port: number) {
  const localAddress = `http://localhost:${port}`;
  const networkAddress = getNetworkAddress(port);

  console.log(`▲ Nest.js Application
   - Local:        ${localAddress}
   - Network:      ${networkAddress}`);
}
