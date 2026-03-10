import axios, { AxiosInstance } from "axios"
import axiosRetry from "axios-retry"

export interface Params {
    [key: string]: string | number | boolean
}

export class AxiosWrapper {
    httpClient: AxiosInstance;
    constructor(baseUrl: string) {
        this.httpClient = axios.create({
            baseURL: baseUrl,
            timeout: 60000, // 60 second timeout
            maxContentLength: Infinity,
            maxBodyLength: Infinity
        })

        // Wrap our Axios HTTP client in an Axios retry object to automatically
        // handle rate limiting.  By default, this logic will retry a given
        // API call 3 times before failing.  Read the documentation for 
        // axios-retry on NPM to see more configuration options.
        axiosRetry(this.httpClient, {
            retries: 15,
            retryDelay: (retryCount, error) => {
                console.log(`[Retry] Attempt ${retryCount} of 15`);
                // Check if there's a Retry-After header from the API
                if (error.response?.headers['retry-after']) {
                    const retryAfter = parseInt(error.response.headers['retry-after'], 10);
                    const delayMs = retryAfter * 1000; // Convert seconds to milliseconds
                    console.log(`[Retry] Rate limited, waiting ${retryAfter} seconds before retry...`);
                    return delayMs;
                }
                // Fallback to exponential backoff if no Retry-After header
                const delay = axiosRetry.exponentialDelay(retryCount, error);
                console.log(`[Retry] Rate limited, waiting ${delay}ms before retry (attempt ${retryCount})...`);
                return delay;
            },
            shouldResetTimeout: true,
            retryCondition: (error) => {
                console.log(`[Retry] Checking if should retry. Status: ${error.response?.status}`);
                // Only retry if the API call receives an error code of 429
                if (error.response?.status === 429) {
                    console.log(`[Retry] Will retry (429 status)`);
                    return true;
                }
                console.log(`[Retry] Will NOT retry (status is not 429)`);
                return false;
            },
            onRetry: (retryCount, error, requestConfig) => {
                console.log(`[Retry] Executing retry #${retryCount} for ${requestConfig.url}`);
            }
            
        })
    }

    async get<T = any>(url: string, data?: any) {
        return this.httpClient.get<T>(url, data);
    }

    async post<T = any>(url: string, data?: any, headers?: any) {
        return this.httpClient.post<T>(url, data, headers);
    }

    async delete<T = any>(url: string, data?: any) {
        return this.httpClient.delete<T>(url, data);
    }

    async put<T = any>(url: string, data?: any, headers?: any) {
        return this.httpClient.put<T>(url, data, headers);
    }

}