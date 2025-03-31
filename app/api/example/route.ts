export function GET(request: Request) {
    console.log("これが呼ばれた時には、サーバ側に何か刻むように。");
    return new Response("え、API作るだけで、しかも日本語でええのん？");
}
