let nock = require('nock');

module.exports.hash = "1bd7023ed28777a4b59713a57fa85e6d";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/common/discovery/instance')
  .query(true)
  .reply(200, {"tenant_discovery_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration","api-version":"1.1","metadata":[{"preferred_network":"login.microsoftonline.com","preferred_cache":"login.windows.net","aliases":["login.microsoftonline.com","login.windows.net","login.microsoft.com","sts.windows.net"]},{"preferred_network":"login.partner.microsoftonline.cn","preferred_cache":"login.partner.microsoftonline.cn","aliases":["login.partner.microsoftonline.cn","login.chinacloudapi.cn"]},{"preferred_network":"login.microsoftonline.de","preferred_cache":"login.microsoftonline.de","aliases":["login.microsoftonline.de"]},{"preferred_network":"login.microsoftonline.us","preferred_cache":"login.microsoftonline.us","aliases":["login.microsoftonline.us","login.usgovcloudapi.net"]},{"preferred_network":"login-us.microsoftonline.com","preferred_cache":"login-us.microsoftonline.com","aliases":["login-us.microsoftonline.com"]}]}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '5285c3d9-cae3-4c1d-810a-40fad1e30100',
  'x-ms-ests-server',
  '2.1.12261.15 - SEASLR2 ProdSlices',
  'Set-Cookie',
  'fpc=Avitk0lQMh1Bn3eA4pOCYrU; expires=Sat, 15-Jan-2022 02:15:35 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevreFsS_f9_ijT2FR9wuSLUYNm3m8yTN4ecMv2S_O1Un107Aun8Lr006Ek22izNDUooneEB8P9lUFBzqfe60KADQ1xxJxJSOedFiNI3_RYHm0L8qng2aS4nYPkqdsJ5W-kw50XDpZlooPifGyhLIqX1TxAPMka_23ouo3ZAjwUJDw0gAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 16 Dec 2021 02:15:34 GMT',
  'Content-Length',
  '980'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .get('/88888888-8888-8888-8888-888888888888/v2.0/.well-known/openid-configuration')
  .reply(200, {"token_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token","token_endpoint_auth_methods_supported":["client_secret_post","private_key_jwt","client_secret_basic"],"jwks_uri":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/discovery/v2.0/keys","response_modes_supported":["query","fragment","form_post"],"subject_types_supported":["pairwise"],"id_token_signing_alg_values_supported":["RS256"],"response_types_supported":["code","id_token","code id_token","id_token token"],"scopes_supported":["openid","profile","email","offline_access"],"issuer":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/v2.0","request_uri_parameter_supported":false,"userinfo_endpoint":"https://graph.microsoft.com/oidc/userinfo","authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/authorize","device_authorization_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/devicecode","http_logout_supported":true,"frontchannel_logout_supported":true,"end_session_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/oauth2/v2.0/logout","claims_supported":["sub","iss","cloud_instance_name","cloud_instance_host_name","cloud_graph_host_name","msgraph_host","aud","exp","iat","auth_time","acr","nonce","preferred_username","name","tid","ver","at_hash","c_hash","email"],"kerberos_endpoint":"https://login.microsoftonline.com/88888888-8888-8888-8888-888888888888/kerberos","tenant_region_scope":"WW","cloud_instance_name":"microsoftonline.com","cloud_graph_host_name":"graph.windows.net","msgraph_host":"graph.microsoft.com","rbac_url":"https://pas.windows.net"}, [
  'Cache-Control',
  'max-age=86400, private',
  'Content-Type',
  'application/json; charset=utf-8',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'Access-Control-Allow-Origin',
  '*',
  'Access-Control-Allow-Methods',
  'GET, OPTIONS',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  'f058f362-0d5d-4341-9bc3-7779f0460200',
  'x-ms-ests-server',
  '2.1.12261.15 - KRSLR2 ProdSlices',
  'Set-Cookie',
  'fpc=ApuZVRCOH9hGijtuyHrCqhI; expires=Sat, 15-Jan-2022 02:15:35 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'esctx=AQABAAAAAAD--DLA3VO7QrddgJg7WevrW6YsZh_FZQEZE6axKVKxTAwkfJlAPEOHx955lJHI_FNQq6KsnL10O4hNAQooQcgGcLWdQNFypeWYyoz9T090I21YpDeljgS1-2PIjWCFUWtj8h3yi7hzl_qT4mVsEVtqh46P34jpGUkAQ-gyuzWYHs77YHSjmBA5_-8eCatSEb8gAA; domain=.login.microsoftonline.com; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 16 Dec 2021 02:15:34 GMT',
  'Content-Length',
  '1753'
]);

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/88888888-8888-8888-8888-888888888888/oauth2/v2.0/token', "client_id=azure_client_id&scope=https%3A%2F%2Fsanitized%2F&grant_type=client_credentials&x-client-SKU=msal.js.node&x-client-VER=1.4.0&x-client-OS=win32&x-client-CPU=x64&x-ms-lib-capability=retry-after, h429&x-client-current-telemetry=5|771,2,,,|,&x-client-last-telemetry=5|0|||0,0&client-request-id=277fa1c6-b83c-4e87-b427-5557d7cc56fa&client_secret=azure_client_secret&claims=%7B%22access_token%22%3A%7B%22xms_cc%22%3A%7B%22values%22%3A%5B%22cp1%22%5D%7D%7D%7D")
  .reply(200, {"token_type":"Bearer","expires_in":86399,"ext_expires_in":86399,"access_token":"access_token"}, [
  'Cache-Control',
  'no-store, no-cache',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'x-ms-request-id',
  '03c6d51b-19f7-48ed-989c-a4f2212f0200',
  'x-ms-ests-server',
  '2.1.12261.15 - SEASLR1 ProdSlices',
  'x-ms-clitelem',
  '1,0,0,,',
  'Set-Cookie',
  'fpc=Ala_AGbFrBVIgk3JHzTxtCcWPr5BAQAAAEeYTNkOAAAA; expires=Sat, 15-Jan-2022 02:15:35 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; secure; samesite=none; httponly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; secure; samesite=none; httponly',
  'Date',
  'Thu, 16 Dec 2021 02:15:35 GMT',
  'Content-Length',
  '1393'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .patch('/subscriptions/azure_subscription_id/resourceGroups/myjstest/providers/Microsoft.Cdn/profiles/myprofilexxx', {"tags":{"additional_properties":"Tag1"}})
  .query(true)
  .reply(202, {"id":"/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.Cdn/profiles/myprofilexxx","type":"Microsoft.Cdn/profiles","name":"myprofilexxx","location":"EastUs","kind":"cdn","tags":{"additional_properties":"Tag1"},"sku":{"name":"Standard_Verizon"},"properties":{"resourceState":"Active","provisioningState":"Succeeded"}}, [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Content-Length',
  '363',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Location',
  'https://management.azure.com/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.Cdn/operationresults/f478bb1c-e160-4cad-a387-d654b48bfe0c/profileresults/myprofilexxx?api-version=2020-09-01',
  'Retry-After',
  '10',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  '978197ff-4b27-47bb-8ecc-c90e68188d55',
  'x-ms-client-request-id',
  '2e9f8721-eb9c-49f9-97a9-1a3041fa3763',
  'Azure-AsyncOperation',
  'https://management.azure.com/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.Cdn/operationresults/f478bb1c-e160-4cad-a387-d654b48bfe0c?api-version=2020-09-01',
  'Server',
  'Kestrel',
  'x-ms-ratelimit-remaining-subscription-resource-requests',
  '23',
  'x-ms-correlation-request-id',
  '505e32f9-495c-477d-ba6e-f43f37394777',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211216T021538Z:505e32f9-495c-477d-ba6e-f43f37394777',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 16 Dec 2021 02:15:37 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.Cdn/operationresults/f478bb1c-e160-4cad-a387-d654b48bfe0c')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1474d9bb5ebe6a3471f9d2d5fd6d5459d37cd47a38ff2baaeea8f1efde28fa6d52ca72f5f54cb9c3e5ed0b7d9057db05c97e52ff925","ff0ff1fbb5ce3e000000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  '74e611c8-7c6d-4a82-8a5d-93f7d08767e6',
  'x-ms-client-request-id',
  '6775fc01-988e-4872-9116-0915731f7143',
  'Server',
  'Kestrel',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11922',
  'x-ms-correlation-request-id',
  'b7e91020-3d94-4003-8c43-0e09ff7589f0',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211216T021538Z:b7e91020-3d94-4003-8c43-0e09ff7589f0',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 16 Dec 2021 02:15:38 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.Cdn/operationresults/f478bb1c-e160-4cad-a387-d654b48bfe0c')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1474d9bb5ebe6a3471f9d2d5fd6d5459d37cd47a38ff2baaeea8f1efde28fa6d52ca72f5f54cb9c3e5ed0b7d9057db05c97e52ff925","ff0ff1fbb5ce3e000000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  'b1882a80-1cf5-4db5-86f3-fe3a1d8d8946',
  'x-ms-client-request-id',
  '321d7f4a-298b-4b4b-a50a-6643e500210c',
  'Server',
  'Kestrel',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11921',
  'x-ms-correlation-request-id',
  '6687eee0-56b9-479d-85ec-7a869192dbf1',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211216T021540Z:6687eee0-56b9-479d-85ec-7a869192dbf1',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 16 Dec 2021 02:15:40 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.Cdn/operationresults/f478bb1c-e160-4cad-a387-d654b48bfe0c')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1474d9bb5ebe6a3471f9d2d5fd6d5459d37cd47a38ff2baaeea8f1efde28fa6d52ca72f5f54cb9c3e5ed0b7d9057db05c97e52ff925","ff0ff1fbb5ce3e000000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  'bf17ae1f-4d94-4422-a37f-588993a4422b',
  'x-ms-client-request-id',
  'd97af70c-a280-4a5a-977a-71bfea14e79e',
  'Server',
  'Kestrel',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11920',
  'x-ms-correlation-request-id',
  '187bcac0-43a2-4fff-98ed-d6ce5f4f4482',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211216T021543Z:187bcac0-43a2-4fff-98ed-d6ce5f4f4482',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 16 Dec 2021 02:15:42 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.Cdn/operationresults/f478bb1c-e160-4cad-a387-d654b48bfe0c')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef1474d9bb5ebe6a3471fbd5e4fa7793ecb671f8d3ecaebbaaa3f7af48b3f9a56b39cbe7b512d73fa7891374d76411f2cd765f94b","7ec9ff03e35461a53d000000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  'd1e756b7-2096-422e-aadb-db473bb02ede',
  'x-ms-client-request-id',
  '6fd7adf9-b984-4566-aaaf-a362fde092e9',
  'Server',
  'Kestrel',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11919',
  'x-ms-correlation-request-id',
  'e110cf7b-5b94-4973-9183-7d4c56d40245',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211216T021545Z:e110cf7b-5b94-4973-9183-7d4c56d40245',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 16 Dec 2021 02:15:45 GMT'
]);

nock('https://management.azure.com:443', {"encodedQueryParams":true})
  .get('/subscriptions/azure_subscription_id/resourcegroups/myjstest/providers/Microsoft.Cdn/operationresults/f478bb1c-e160-4cad-a387-d654b48bfe0c/profileresults/myprofilexxx')
  .query(true)
  .reply(200, ["1f8b0800000000000400edbd07601c499625262f6dca7b7f4af54ad7e074a10880601324d8904010ecc188cde692ec1d69472329ab2a81ca6556655d661640cced9dbcf7de7befbdf7de7befbdf7ba3b9d4e27f7dfff3f5c6664016cf6ce4adac99e2180aac81f3f7e7c1f3f227ef147c5eca3471fdd6dd693665a17abb6a896cddd877be70fefcf0eceb7ef4d3f7db0bdbfbbb7bffd7077fa60fb607abef3603a9b9cefedefdeadf3a65ad7d3fca2aed6abe6eee2faa79b366fdabbabbaba2c6679dddcfda298d655539db7e393d9f26eb5caeb0cf0e9c575d93677cff71f1c4c26bbd3ed7cf7d39dedfd6936dbceee1d3cd89e7d7a7f7fb27f3039cf77a680765e94b9796771ad1fbc7bf7eea3d147edf52a27f46fe8485fd13fe9b565b6c06b1d606535e5d7e89bd3ac69bf42cbb7c512f499ce96f4479b5d341f3dfac51f65b359818659f9fb1300eaad2d72fae2a337d9c5ee47bf64f451f3768d66dacbeb365bceb27af6fbff645e173f20f0d4c27fed177f44883125a9658b378ea76d71995387d4ecb268a8a7627961be7cbd9e4ef37c96cf3efa25bf","e4ff01088fc69cbe010000"], [
  'Cache-Control',
  'no-cache',
  'Pragma',
  'no-cache',
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'Content-Encoding',
  'gzip',
  'Expires',
  '-1',
  'Vary',
  'Accept-Encoding',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'x-ms-request-id',
  '5d2c26bf-5426-4218-8220-92fa2daaab95',
  'x-ms-client-request-id',
  '4390be16-9157-47b9-a745-9c6ef98defc1',
  'Server',
  'Kestrel',
  'x-ms-ratelimit-remaining-subscription-reads',
  '11918',
  'x-ms-correlation-request-id',
  '1b246543-cfc0-406f-a749-386be00463fe',
  'x-ms-routing-request-id',
  'SOUTHEASTASIA:20211216T021548Z:1b246543-cfc0-406f-a749-386be00463fe',
  'X-Content-Type-Options',
  'nosniff',
  'Date',
  'Thu, 16 Dec 2021 02:15:47 GMT'
]);
