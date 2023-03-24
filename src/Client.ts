import axios, { AxiosResponse } from 'axios';

export default class Client {
    private readonly slug: string;
    // private readonly email: string;
    // private readonly apiKey: string;
    // private readonly userAgent: string;
    private readonly headers: any;

    private basicAuthToken: string;
    private _lastResponse: AxiosResponse | undefined;

    constructor(slug: string, email: string, apiKey: string, userAgent?: string) {
        const agent = userAgent || `${slug} (${email})`;

        this.slug = slug;

        const buff = new Buffer(`${email}:${apiKey}`);
        this.basicAuthToken = buff.toString('base64');

        this.headers = {
            Authorization: `Basic ${this.basicAuthToken}`,
            'User-Agent': agent,
        };
    }

    async get(url: string, params: { [key: string]: any } = {}): Promise<AxiosResponse<any> | any> {
        const parameters = Object.keys(params).map((paramName) => {
            return `${paramName}=${params[paramName]}`;
        });

        return axios.get(`https://app.fakturoid.cz/api/v2/accounts/${this.slug}/${url}?${parameters.join('&')}`, {
            headers: this.headers,
        });
    }

    async patch(url: string, body: { [key: string]: any } = {}): Promise<AxiosResponse<any> | any> {
        return axios.patch(`https://app.fakturoid.cz/api/v2/accounts/${this.slug}/${url}`, body, {
            headers: this.headers,
        });
    }

    async post(url: string, body: { [key: string]: any } = {}): Promise<AxiosResponse<any> | any> {
        return axios.post(`https://app.fakturoid.cz/api/v2/accounts/${this.slug}/${url}`, body, {
            headers: this.headers,
        });
    }

    async delete(url: string, body: { [key: string]: any } = {}): Promise<AxiosResponse<any> | any> {
        return axios.delete(`https://app.fakturoid.cz/api/v2/accounts/${this.slug}/${url}`, {
            headers: this.headers,
        });
    }

    async download(url: string): Promise<AxiosResponse<any> | any> {
        return axios.get(`https://app.fakturoid.cz/api/v2/accounts/${this.slug}/${url}`, {
            responseType: 'stream',
            headers: this.headers,
        });
    }

    getSlug(): string {
        return this.slug;
    }

    get lastResponse(): AxiosResponse | undefined {
        return this._lastResponse;
    }
}
