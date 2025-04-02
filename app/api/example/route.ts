export const GET = async (request: Request) => {
    let resultMessage = "環境変数が見つからなかったので、何もしませんでした。";
    const slackWebhookUrl = process.env["SLACK_WEBHOOK_URL"];
    if (slackWebhookUrl != null) {
        const url = new URL(request.url)
        const messageParam = url.searchParams.get("message");
        const message = messageParam == null ? "[未指定]" : messageParam;

        await fetch(slackWebhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                deploymentId: "テスト用、正規のIDではありません",
                message
            }),
        });
        resultMessage = "テスト用のメッセージはSlackに送信されました。message:" + message;
    }
    console.log(resultMessage);
    return new Response(resultMessage);
};
