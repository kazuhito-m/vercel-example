export const GET = async (request: Request) => {
    let resultMessage = "環境変数が見つからなかったので、何もしませんでした。";
    const slackWebhookUrl = process.env["SLACK_WEBHOOK_URL"];
    if (slackWebhookUrl != null) {
        await fetch(slackWebhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                deploymentId: "テスト用、正規のIDではありません",
                parameterSheetUrl: "未設定",
                message: "ここに好きなメッセージを貼ります。"
            }),
        });
        resultMessage = "テスト用のメッセージはSlackに送信されました。"
    }
    console.log(resultMessage);
    return new Response(resultMessage);
};
