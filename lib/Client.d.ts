import { AxiosResponse } from 'axios';
export default class Client {
    private readonly slug;
    private readonly headers;
    private basicAuthToken;
    private _lastResponse;
    constructor(slug: string, email: string, apiKey: string, userAgent?: string);
    get(url: string, params?: {
        [key: string]: any;
    }): Promise<AxiosResponse<any> | any>;
    patch(url: string, body?: {
        [key: string]: any;
    }): Promise<AxiosResponse<any> | any>;
    post(url: string, body?: {
        [key: string]: any;
    }): Promise<AxiosResponse<any> | any>;
    delete(url: string, body?: {
        [key: string]: any;
    }): Promise<AxiosResponse<any> | any>;
    download(url: string): Promise<AxiosResponse<any> | any>;
    getSlug(): string;
    get lastResponse(): AxiosResponse | undefined;
}
