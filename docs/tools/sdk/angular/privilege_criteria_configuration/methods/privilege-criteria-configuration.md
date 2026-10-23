# PrivilegeCriteriaConfiguration

# PrivilegeCriteriaConfigurationService
  Use this API to manage the configuration of privilege criteria.

**globalPrivilegeLevelEnabled**: Boolean flag indicating whether privilege classification is enabled.


**privilegeClassificationMode**: Enum specifying the mode (CRITERIA_PRIVILEGE_LEVEL, SINGLE_PRIVILEGE_LEVEL) to use for privilege classification. CRITERIA_PRIVILEGE_LEVEL mode uses criteria to determine privilege levels, while SINGLE_PRIVILEGE_LEVEL assigns the same privilege level to all enititlements based on the value of singlePrivilegeLevel.privilegeLevel.


**singlePrivilegeLevel.privilegeLevel**: Enum specifying the privilege level (HIGH, MEDIUM, LOW) to assign to all privileges when the privilege classification mode is SINGLE_PRIVILEGE_LEVEL.


**criteriaPrivilegeLevel.connectorHighEnabled**: Boolean flag indicating whether HIGH level connector criteria is used for privilege classification.


**criteriaPrivilegeLevel.connectorMediumEnabled**: Boolean flag indicating whether MEDIUM level connector criteria is used for privilege classification.


**criteriaPrivilegeLevel.connectorLowEnabled**: Boolean flag indicating whether LOW level connector criteria is used for privilege classification.


**criteriaPrivilegeLevel.customHighEnabled**: Boolean flag indicating whether HIGH level custom criteria is used for privilege classification.


**criteriaPrivilegeLevel.customMediumEnabled**: Boolean flag indicating whether MEDIUM level custom criteria is used for privilege classification.


**criteriaPrivilegeLevel.customLowEnabled**: Boolean flag indicating whether LOW level custom criteria is used for privilege classification.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-privilege-criteria-config-v1**](#get-privilege-criteria-config-v1) | **GET** `/criteria-config/v1/privilege/{criteriaConfigId}` | Get privilege criteria config
[**list-privilege-criteria-config-v1**](#list-privilege-criteria-config-v1) | **GET** `/criteria-config/v1/privilege` | List privilege criteria config
[**patch-privilege-criteria-config-v1**](#patch-privilege-criteria-config-v1) | **PATCH** `/criteria-config/v1/privilege/{criteriaConfigId}` | Update privilege criteria configuration


## get-privilege-criteria-config-v1
Get privilege criteria config
Use this API to get the privilege criteria configuration by Id.

[API Spec](https://developer.sailpoint.com/docs/api/get-privilege-criteria-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetPrivilegeCriteriaConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**criteriaConfigId** | `string` | The Id of the privilege criteria configuration record to retrieve. |  [default to undefined]

### Return type

`Observable<PrivilegeCriteriaConfigDTO>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { PrivilegeCriteriaConfigurationService } from '@sailpoint/angular-sdk/privilege_criteria_configuration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(PrivilegeCriteriaConfigurationService);

  getPrivilegeCriteriaConfigV1(): void {
    const criteriaConfigId: string = ; // The Id of the privilege criteria configuration record to retrieve.
    this.api.getPrivilegeCriteriaConfigV1({ criteriaConfigId: criteriaConfigId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-privilege-criteria-config-v1
List privilege criteria config
Use this API to list the privilege criteria configuration.

[API Spec](https://developer.sailpoint.com/docs/api/list-privilege-criteria-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListPrivilegeCriteriaConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  All filter values are case-sensitive for this API.  For example, the following is valid: &#x60;?filters&#x3D;sourceId eq \&quot;2c91809175e6c63f0175fb5570220569\&quot;&#x60; |  [default to undefined]

### Return type

`Observable<Array<PrivilegeCriteriaConfigDTO>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { PrivilegeCriteriaConfigurationService } from '@sailpoint/angular-sdk/privilege_criteria_configuration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(PrivilegeCriteriaConfigurationService);

  listPrivilegeCriteriaConfigV1(): void {
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  All filter values are case-sensitive for this API.  For example, the following is valid: &#x60;?filters&#x3D;sourceId eq \&quot;2c91809175e6c63f0175fb5570220569\&quot;&#x60;
    this.api.listPrivilegeCriteriaConfigV1({ filters: filters }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## patch-privilege-criteria-config-v1
Update privilege criteria configuration
Use this API to update the privilege criteria configuration.

[API Spec](https://developer.sailpoint.com/docs/api/patch-privilege-criteria-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PatchPrivilegeCriteriaConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**criteriaConfigId** | `string` | The Id of the privilege criteria configuration to update. |  [default to undefined]
**requestBody** | `Array<object>` | A list of criteria configuration operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 

### Return type

`Observable<PrivilegeCriteriaConfigDTO>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { PrivilegeCriteriaConfigurationService } from '@sailpoint/angular-sdk/privilege_criteria_configuration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(PrivilegeCriteriaConfigurationService);

  patchPrivilegeCriteriaConfigV1(): void {
    const criteriaConfigId: string = ; // The Id of the privilege criteria configuration to update.
    const requestBody: Array<object> = ; // A list of criteria configuration operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
    this.api.patchPrivilegeCriteriaConfigV1({ criteriaConfigId: criteriaConfigId, requestBody: requestBody }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

