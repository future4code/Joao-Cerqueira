export enum Roles{
    NORMAL='NORMAL',
    ADMIN='ADMIN'
 }
 export type user = {
    id: string
    email: string
    password: string
    name: string
    nickname: string
    nickname: string,
    role:string
 }
 
 export interface UserInputDTO {
    name: string,
    nickname: string,
    email: string,
    password: string
    password: string,
    role:string
 }
 
 export interface LoginInputDTO {
    email: string,
    password: string
    password: string,
    role:string
 }
 
 export interface EditUserInputDTO {
 @@ -32,5 +39,6 @@ export interface EditUserInput {
 }
 
 export interface AuthenticationData {
    id: string
    id: string,
    role:string
 }