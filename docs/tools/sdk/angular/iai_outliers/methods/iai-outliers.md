# IAIOutliers

# IAIOutliersService
   
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**export-outliers-zip-v1**](#export-outliers-zip-v1) | **GET** `/outliers/v1/export` | Iai identity outliers export
[**get-identity-outlier-snapshots-v1**](#get-identity-outlier-snapshots-v1) | **GET** `/outlier-summaries/v1` | Iai identity outliers summary
[**get-identity-outliers-v1**](#get-identity-outliers-v1) | **GET** `/outliers/v1` | Iai get identity outliers
[**get-latest-identity-outlier-snapshots-v1**](#get-latest-identity-outlier-snapshots-v1) | **GET** `/outlier-summaries/v1/latest` | Iai identity outliers latest summary
[**get-outlier-contributing-feature-summary-v1**](#get-outlier-contributing-feature-summary-v1) | **GET** `/outlier-feature-summaries/v1/{outlierFeatureId}` | Get identity outlier contibuting feature summary
[**get-peer-group-outliers-contributing-features-v1**](#get-peer-group-outliers-contributing-features-v1) | **GET** `/outliers/v1/{outlierId}/contributing-features` | Get identity outlier\&#39;s contibuting features
[**ignore-identity-outliers-v1**](#ignore-identity-outliers-v1) | **POST** `/outliers/v1/ignore` | Iai identity outliers ignore
[**list-outliers-contributing-feature-access-items-v1**](#list-outliers-contributing-feature-access-items-v1) | **GET** `/outliers/v1/{outlierId}/feature-details/{contributingFeatureName}/access-items` | Gets a list of access items associated with each identity outlier contributing feature
[**un-ignore-identity-outliers-v1**](#un-ignore-identity-outliers-v1) | **POST** `/outliers/v1/unignore` | Iai identity outliers unignore


## export-outliers-zip-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Iai identity outliers export
This API exports a list of ignored outliers to a CSV as well as list of non-ignored outliers to a CSV. These two CSVs will be zipped and exported.

Columns will include: identityId, type, firstDetectionDate, latestDetectionDate, ignored, & attributes (defined set of identity attributes).


[API Spec](https://developer.sailpoint.com/docs/api/export-outliers-zip-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ExportOutliersZipV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**type** | `'LOW_SIMILARITY' | 'STRUCTURAL'` | Type of the identity outliers snapshot to filter on | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Blob>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/zip, application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIOutliersService } from '@sailpoint/angular-sdk/iai_outliers';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIOutliersService);

  exportOutliersZipV1(): void {
    const type: string = ; // Type of the identity outliers snapshot to filter on (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.exportOutliersZipV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-identity-outlier-snapshots-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Iai identity outliers summary
This API returns a summary containing the number of identities that customer has, the number of outliers, and the type of outlier.

[API Spec](https://developer.sailpoint.com/docs/api/get-identity-outlier-snapshots-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetIdentityOutlierSnapshotsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**type** | `'LOW_SIMILARITY' | 'STRUCTURAL'` | Type of the identity outliers snapshot to filter on | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **snapshotDate**: *ge, le* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **snapshotDate** | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<OutlierSummary>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIOutliersService } from '@sailpoint/angular-sdk/iai_outliers';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIOutliersService);

  getIdentityOutlierSnapshotsV1(): void {
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const type: string = ; // Type of the identity outliers snapshot to filter on (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **snapshotDate**: *ge, le* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **snapshotDate** (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getIdentityOutlierSnapshotsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-identity-outliers-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Iai get identity outliers
This API returns a list of outliers, containing data such as identity ID, outlier type, detection dates, identity attributes, if identity is ignored, and certification information.

[API Spec](https://developer.sailpoint.com/docs/api/get-identity-outliers-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetIdentityOutliersV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**type** | `'LOW_SIMILARITY' | 'STRUCTURAL'` | Type of the identity outliers snapshot to filter on | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **attributes**: *eq, sw, co, in*  **firstDetectionDate**: *ge, le*  **certStatus**: *eq*  **ignored**: *eq*  **score**: *ge, le* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **firstDetectionDate, attributes, score** | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<Outlier>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIOutliersService } from '@sailpoint/angular-sdk/iai_outliers';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIOutliersService);

  getIdentityOutliersV1(): void {
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const type: string = ; // Type of the identity outliers snapshot to filter on (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **attributes**: *eq, sw, co, in*  **firstDetectionDate**: *ge, le*  **certStatus**: *eq*  **ignored**: *eq*  **score**: *ge, le* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **firstDetectionDate, attributes, score** (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getIdentityOutliersV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-latest-identity-outlier-snapshots-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Iai identity outliers latest summary
This API returns a most recent snapshot of each outlier type, each containing the number of identities that customer has, the number of outliers, and the type of outlier.

[API Spec](https://developer.sailpoint.com/docs/api/get-latest-identity-outlier-snapshots-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetLatestIdentityOutlierSnapshotsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**type** | `'LOW_SIMILARITY' | 'STRUCTURAL'` | Type of the identity outliers snapshot to filter on | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<LatestOutlierSummary>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIOutliersService } from '@sailpoint/angular-sdk/iai_outliers';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIOutliersService);

  getLatestIdentityOutlierSnapshotsV1(): void {
    const type: string = ; // Type of the identity outliers snapshot to filter on (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getLatestIdentityOutlierSnapshotsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-outlier-contributing-feature-summary-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get identity outlier contibuting feature summary
This API returns a summary of a contributing feature for an identity outlier.

The object contains: contributing feature name (translated text or message key), identity outlier display name, feature values, feature definition and explanation (translated text or message key), peer display name and identityId, access item reference, translation messages object.


[API Spec](https://developer.sailpoint.com/docs/api/get-outlier-contributing-feature-summary-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetOutlierContributingFeatureSummaryV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**outlierFeatureId** | `string` | Contributing feature id |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<OutlierFeatureSummary>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIOutliersService } from '@sailpoint/angular-sdk/iai_outliers';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIOutliersService);

  getOutlierContributingFeatureSummaryV1(): void {
    const outlierFeatureId: string = ; // Contributing feature id
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getOutlierContributingFeatureSummaryV1({ outlierFeatureId: outlierFeatureId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-peer-group-outliers-contributing-features-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get identity outlier\'s contibuting features
This API returns a list of contributing feature objects for a single outlier.

The object contains: feature name, feature value type, value, importance, display name (translated text or message key), description (translated text or message key), translation messages object.


[API Spec](https://developer.sailpoint.com/docs/api/get-peer-group-outliers-contributing-features-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetPeerGroupOutliersContributingFeaturesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**outlierId** | `string` | The outlier id |  [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**includeTranslationMessages** | `string` | Whether or not to include translation messages object in returned response | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **importance** | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<OutlierContributingFeature>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIOutliersService } from '@sailpoint/angular-sdk/iai_outliers';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIOutliersService);

  getPeerGroupOutliersContributingFeaturesV1(): void {
    const outlierId: string = ; // The outlier id
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const includeTranslationMessages: string = ; // Whether or not to include translation messages object in returned response (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **importance** (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getPeerGroupOutliersContributingFeaturesV1({ outlierId: outlierId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## ignore-identity-outliers-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Iai identity outliers ignore
This API receives a list of identity IDs in the request, changes the outliers to be ignored.

[API Spec](https://developer.sailpoint.com/docs/api/ignore-identity-outliers-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `IgnoreIdentityOutliersV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**requestBody** | `Array<string>` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIOutliersService } from '@sailpoint/angular-sdk/iai_outliers';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIOutliersService);

  ignoreIdentityOutliersV1(): void {
    const requestBody: Array<string> = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.ignoreIdentityOutliersV1({ requestBody: requestBody }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-outliers-contributing-feature-access-items-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Gets a list of access items associated with each identity outlier contributing feature
This API returns a list of the enriched access items associated with each feature filtered by the access item type.

The object contains: accessItemId, display name (translated text or message key), description (translated text or message key), accessType, sourceName, extremelyRare.


[API Spec](https://developer.sailpoint.com/docs/api/list-outliers-contributing-feature-access-items-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListOutliersContributingFeatureAccessItemsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**outlierId** | `string` | The outlier id |  [default to undefined]
**contributingFeatureName** | `'radical_entitlement_count' | 'entitlement_count' | 'max_jaccard_similarity' | 'mean_max_bundle_concurrency' | 'single_entitlement_bundle_count' | 'peerless_score'` | The name of contributing feature |  [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**accessType** | `string` | The type of access item for the identity outlier contributing feature. If not provided, it returns all. | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName** | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<OutliersContributingFeatureAccessItems>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIOutliersService } from '@sailpoint/angular-sdk/iai_outliers';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIOutliersService);

  listOutliersContributingFeatureAccessItemsV1(): void {
    const outlierId: string = ; // The outlier id
    const contributingFeatureName: string = ; // The name of contributing feature
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const accessType: string = ; // The type of access item for the identity outlier contributing feature. If not provided, it returns all. (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName** (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.listOutliersContributingFeatureAccessItemsV1({ outlierId: outlierId, contributingFeatureName: contributingFeatureName }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## un-ignore-identity-outliers-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Iai identity outliers unignore
This API receives a list of identity IDs in the request, changes the outliers to be un-ignored.

[API Spec](https://developer.sailpoint.com/docs/api/un-ignore-identity-outliers-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UnIgnoreIdentityOutliersV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**requestBody** | `Array<string>` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIOutliersService } from '@sailpoint/angular-sdk/iai_outliers';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIOutliersService);

  unIgnoreIdentityOutliersV1(): void {
    const requestBody: Array<string> = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.unIgnoreIdentityOutliersV1({ requestBody: requestBody }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

