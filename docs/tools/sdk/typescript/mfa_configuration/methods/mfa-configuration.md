# MFAConfiguration

# MFAConfigurationApi
  Configure and test multifactor authentication (MFA) methods 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-mfa-duo-config-v1**](#get-mfa-duo-config-v1) | **GET** `/mfa/v1/duo-web/config` | Configuration of duo mfa method
[**get-mfa-kba-config-v1**](#get-mfa-kba-config-v1) | **GET** `/mfa/v1/kba/config` | Configuration of kba mfa method
[**get-mfa-okta-config-v1**](#get-mfa-okta-config-v1) | **GET** `/mfa/v1/okta-verify/config` | Configuration of okta mfa method
[**set-mfa-duo-config-v1**](#set-mfa-duo-config-v1) | **PUT** `/mfa/v1/duo-web/config` | Set duo mfa configuration
[**set-mfakba-config-v1**](#set-mfakba-config-v1) | **POST** `/mfa/v1/kba/config/answers` | Set mfa kba configuration
[**set-mfa-okta-config-v1**](#set-mfa-okta-config-v1) | **PUT** `/mfa/v1/okta-verify/config` | Set okta mfa configuration
[**test-mfa-config-v1**](#test-mfa-config-v1) | **GET** `/mfa/v1/{method}/test` | Mfa method\&#39;s test configuration


## get-mfa-duo-config-v1
Configuration of duo mfa method
This API returns the configuration of an Duo MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/get-mfa-duo-config-v-1)

### Parameters

This endpoint does not need any parameter.

### Return type

`MfaDuoConfig`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MFAConfigurationApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new MFAConfigurationApi(configuration);
const result = await apiInstance.getMFADuoConfigV1({  });
console.log(result);
```

[[Back to top]](#)

## get-mfa-kba-config-v1
Configuration of kba mfa method
This API returns the KBA configuration for MFA.

[API Spec](https://developer.sailpoint.com/docs/api/get-mfa-kba-config-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**allLanguages** | `boolean` | Indicator whether the question text should be returned in all configured languages    * If true, the question text is returned in all languages that it is configured in.    * If false, the question text is returned in the user locale if available, else for the default locale.     * If not passed, it behaves the same way as passing this parameter as false | [optional] [default to undefined]

### Return type

`Array<KbaQuestion>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MFAConfigurationApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new MFAConfigurationApi(configuration);
const allLanguages: boolean = allLanguages=true; // Indicator whether the question text should be returned in all configured languages    * If true, the question text is returned in all languages that it is configured in.    * If false, the question text is returned in the user locale if available, else for the default locale.     * If not passed, it behaves the same way as passing this parameter as false (optional)
const result = await apiInstance.getMFAKbaConfigV1({  });
console.log(result);
```

[[Back to top]](#)

## get-mfa-okta-config-v1
Configuration of okta mfa method
This API returns the configuration of an Okta MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/get-mfa-okta-config-v-1)

### Parameters

This endpoint does not need any parameter.

### Return type

`MfaOktaConfig`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MFAConfigurationApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new MFAConfigurationApi(configuration);
const result = await apiInstance.getMFAOktaConfigV1({  });
console.log(result);
```

[[Back to top]](#)

## set-mfa-duo-config-v1
Set duo mfa configuration
This API sets the configuration of an Duo MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/set-mfa-duo-config-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**mfaDuoConfig** | `MfaDuoConfig` |  | 

### Return type

`MfaDuoConfig`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { MFAConfigurationApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { MfaDuoConfig } from '@sailpoint/api-client/dist/mfa_configuration/api';

const configuration = new Configuration();
const apiInstance = new MFAConfigurationApi(configuration);
const mfaDuoConfig: MfaDuoConfig = {
  "accessKey" : "qw123Y3QlA5UqocYpdU3rEkzrK2D497y",
  "host" : "example.com",
  "configProperties" : {
    "skey" : "qwERttyZx1CdlQye2Vwtbsjr3HKddy4BAiCXjc5x",
    "ikey" : "Q123WE45R6TY7890ZXCV"
  },
  "mfaMethod" : "duo-web",
  "enabled" : true,
  "identityAttribute" : "email"
}; // 
const result = await apiInstance.setMFADuoConfigV1({ mfaDuoConfig: mfaDuoConfig });
console.log(result);
```

[[Back to top]](#)

## set-mfakba-config-v1
Set mfa kba configuration
This API sets answers to challenge questions.  Any configured questions omitted from the request are removed from user KBA configuration.    

[API Spec](https://developer.sailpoint.com/docs/api/set-mfakba-config-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**kbaAnswerRequestItem** | `Array<KbaAnswerRequestItem>` |  | 

### Return type

`Array<KbaAnswerResponseItem>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { MFAConfigurationApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { KbaAnswerRequestItem } from '@sailpoint/api-client/dist/mfa_configuration/api';

const configuration = new Configuration();
const apiInstance = new MFAConfigurationApi(configuration);
const kbaAnswerRequestItem: Array<KbaAnswerRequestItem> = {
  "answer" : "Your answer",
  "id" : "c54fee53-2d63-4fc5-9259-3e93b9994135"
}; // 
const result = await apiInstance.setMFAKBAConfigV1({ kbaAnswerRequestItem: kbaAnswerRequestItem });
console.log(result);
```

[[Back to top]](#)

## set-mfa-okta-config-v1
Set okta mfa configuration
This API sets the configuration of an Okta MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/set-mfa-okta-config-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**mfaOktaConfig** | `MfaOktaConfig` |  | 

### Return type

`MfaOktaConfig`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { MFAConfigurationApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { MfaOktaConfig } from '@sailpoint/api-client/dist/mfa_configuration/api';

const configuration = new Configuration();
const apiInstance = new MFAConfigurationApi(configuration);
const mfaOktaConfig: MfaOktaConfig = {
  "accessKey" : "qw123Y3QlA5UqocYpdU3rEkzrK2D497y",
  "host" : "example.com",
  "mfaMethod" : "okta-verify",
  "enabled" : true,
  "identityAttribute" : "email"
}; // 
const result = await apiInstance.setMFAOktaConfigV1({ mfaOktaConfig: mfaOktaConfig });
console.log(result);
```

[[Back to top]](#)

## test-mfa-config-v1
Mfa method\'s test configuration
This API validates that the configuration is valid and will properly authenticate with the MFA provider identified by the method path parameter.

[API Spec](https://developer.sailpoint.com/docs/api/test-mfa-config-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**method** | `'okta-verify' | 'duo-web'` | The name of the MFA method. The currently supported method names are \&#39;okta-verify\&#39; and \&#39;duo-web\&#39;. |  [default to undefined]

### Return type

`MfaConfigTestResponse`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MFAConfigurationApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new MFAConfigurationApi(configuration);
const method: string = okta-verify; // The name of the MFA method. The currently supported method names are \&#39;okta-verify\&#39; and \&#39;duo-web\&#39;.
const result = await apiInstance.testMFAConfigV1({ method: method });
console.log(result);
```

[[Back to top]](#)

