import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type Admin = Principal;
export interface QueryInquiry {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
}
export type Time = bigint;
export interface backendInterface {
    getAllInquiries(): Promise<Array<QueryInquiry>>;
    initializeAdmin(admin: Admin): Promise<void>;
    isAdmin(admin: Admin): Promise<boolean>;
    submitInquiry(name: string, email: string, message: string): Promise<void>;
}
