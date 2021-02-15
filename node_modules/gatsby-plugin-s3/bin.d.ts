#!/usr/bin/env node
import '@babel/polyfill';
import 'fs-posix';
export interface DeployArguments {
    yes?: boolean;
    bucket?: string;
    userAgent?: string;
}
export declare const deploy: ({ yes, bucket, userAgent }?: DeployArguments) => Promise<void>;
