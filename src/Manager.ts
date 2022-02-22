import { Client, Intents, Message } from 'discord.js';

/**
 * Discord Clientを管理するクラス
 * このクラスを生成して、runすればBotが起動
 */
export default class Manager {

  private token: string;

  private client: Client;

  /**
   * コンストラクタ
   * @param token Botトークン
   */
  constructor(token: string) {
    // Botトークン ここで管理
    this.token = token;

    // Botクライアント生成 ここで管理
    this.client = new Client({
      intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGES]
    });

    this.client.on("messageCreate", this.sendMessage);
  }

  /**
   * メッセージ送信
   * @param msg 受信メッセージ
   * @returns 
   */
  async sendMessage(msg: Message): Promise<void> {
    // 送信者がBotの場合は反応しない
    if (msg.author.bot) {
      return;
    }

    msg.channel.send('Pong!');
  }

  /**
   * マネージャ実行
   * Botの起動用処理
   */
  run() {
    this.client.login(this.token);
  }

}