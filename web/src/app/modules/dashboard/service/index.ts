import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptorService } from "./token-interceptor.service";


export const httpInterceptorProviders =[
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true},
]