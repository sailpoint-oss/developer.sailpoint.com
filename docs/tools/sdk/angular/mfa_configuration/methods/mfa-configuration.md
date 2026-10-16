# MFAConfiguration

# MFAConfigurationService
  Configure and test multifactor authentication (MFA) methods 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

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

The service takes one object that holds every parameter. Its type is `GetMFADuoConfigV1RequestParams`.

This endpoint does not need any parameter.

### Return type

`Observable<MfaDuoConfig>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MFAConfigurationService } from '@sailpoint/angular-sdk/mfa_configuration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MFAConfigurationService);

  getMFADuoConfigV1(): void {
    this.api.getMFADuoConfigV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-mfa-kba-config-v1
Configuration of kba mfa method
This API returns the KBA configuration for MFA.

[API Spec](https://developer.sailpoint.com/docs/api/get-mfa-kba-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetMFAKbaConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**allLanguages** | `boolean` | Indicator whether the question text should be returned in all configured languages    * If true, the question text is returned in all languages that it is configured in.    * If false, the question text is returned in the user locale if available, else for the default locale.     * If not passed, it behaves the same way as passing this parameter as false | [optional] [default to undefined]

### Return type

`Observable<Array<KbaQuestion>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MFAConfigurationService } from '@sailpoint/angular-sdk/mfa_configuration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MFAConfigurationService);

  getMFAKbaConfigV1(): void {
    const allLanguages: boolean = ; // Indicator whether the question text should be returned in all configured languages    * If true, the question text is returned in all languages that it is configured in.    * If false, the question text is returned in the user locale if available, else for the default locale.     * If not passed, it behaves the same way as passing this parameter as false (optional)
    this.api.getMFAKbaConfigV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-mfa-okta-config-v1
Configuration of okta mfa method
This API returns the configuration of an Okta MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/get-mfa-okta-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetMFAOktaConfigV1RequestParams`.

This endpoint does not need any parameter.

### Return type

`Observable<MfaOktaConfig>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MFAConfigurationService } from '@sailpoint/angular-sdk/mfa_configuration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MFAConfigurationService);

  getMFAOktaConfigV1(): void {
    this.api.getMFAOktaConfigV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## set-mfa-duo-config-v1
Set duo mfa configuration
This API sets the configuration of an Duo MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/set-mfa-duo-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SetMFADuoConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**mfaDuoConfig** | `MfaDuoConfig` |  | 

### Return type

`Observable<MfaDuoConfig>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MFAConfigurationService } from '@sailpoint/angular-sdk/mfa_configuration';
import { MfaDuoConfig } from '@sailpoint/angular-sdk/mfa_configuration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MFAConfigurationService);

  setMFADuoConfigV1(): void {
    const mfaDuoConfig: MfaDuoConfig = ; // 
    this.api.setMFADuoConfigV1({ mfaDuoConfig: mfaDuoConfig }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## set-mfakba-config-v1
Set mfa kba configuration
This API sets answers to challenge questions.  Any configured questions omitted from the request are removed from user KBA configuration.    

[API Spec](https://developer.sailpoint.com/docs/api/set-mfakba-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SetMFAKBAConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**kbaAnswerRequestItem** | `Array<KbaAnswerRequestItem>` |  | 

### Return type

`Observable<Array<KbaAnswerResponseItem>>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MFAConfigurationService } from '@sailpoint/angular-sdk/mfa_configuration';
import { KbaAnswerRequestItem } from '@sailpoint/angular-sdk/mfa_configuration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MFAConfigurationService);

  setMFAKBAConfigV1(): void {
    const kbaAnswerRequestItem: Array<KbaAnswerRequestItem> = ; // 
    this.api.setMFAKBAConfigV1({ kbaAnswerRequestItem: kbaAnswerRequestItem }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## set-mfa-okta-config-v1
Set okta mfa configuration
This API sets the configuration of an Okta MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/set-mfa-okta-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SetMFAOktaConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**mfaOktaConfig** | `MfaOktaConfig` |  | 

### Return type

`Observable<MfaOktaConfig>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MFAConfigurationService } from '@sailpoint/angular-sdk/mfa_configuration';
import { MfaOktaConfig } from '@sailpoint/angular-sdk/mfa_configuration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MFAConfigurationService);

  setMFAOktaConfigV1(): void {
    const mfaOktaConfig: MfaOktaConfig = ; // 
    this.api.setMFAOktaConfigV1({ mfaOktaConfig: mfaOktaConfig }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## test-mfa-config-v1
Mfa method\'s test configuration
This API validates that the configuration is valid and will properly authenticate with the MFA provider identified by the method path parameter.

[API Spec](https://developer.sailpoint.com/docs/api/test-mfa-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `TestMFAConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**method** | `'okta-verify' | 'duo-web'` | The name of the MFA method. The currently supported method names are \&#39;okta-verify\&#39; and \&#39;duo-web\&#39;. |  [default to undefined]

### Return type

`Observable<MfaConfigTestResponse>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MFAConfigurationService } from '@sailpoint/angular-sdk/mfa_configuration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MFAConfigurationService);

  testMFAConfigV1(): void {
    const method: string = ; // The name of the MFA method. The currently supported method names are \&#39;okta-verify\&#39; and \&#39;duo-web\&#39;.
    this.api.testMFAConfigV1({ method: method }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

