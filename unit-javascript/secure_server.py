import http.server
import ssl
import socketserver

PORT = 8000
HANDLER = http.server.SimpleHTTPRequestHandler

# Create a secure SSL context
context = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
# Load your mkcert certificate and key into the context
context.load_cert_chain(certfile="localhost.pem", keyfile="localhost-key.pem")

with socketserver.TCPServer(("", PORT), HANDLER) as httpd:
    # Wrap the TCPServer's socket with the SSL context
    httpd.socket = context.wrap_socket(httpd.socket, server_side=True)
    print(f"Serving securely on https://localhost:{PORT}")
    httpd.serve_forever()
