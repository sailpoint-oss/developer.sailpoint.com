---
id: product
title: Product
pagination_label: Product
sidebar_label: Product
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'Product'] 
slug: /tools/sdk/go/beta/models/product
tags: ['SDK', 'Software Development Kit', 'Product']
---

# Product

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProductName** |  Pointer to **string** | Name of the Product | [optional] 
**Url** |  Pointer to **string** | URL of the Product | [optional] 
**ProductTenantId** |  Pointer to **string** | An identifier for a specific product-tenant combination | [optional] 
**ProductRegion** |  Pointer to **string** | Product region | [optional] 
**ProductRight** |  Pointer to **string** | Right needed for the Product | [optional] 
**ApiUrl** |  Pointer to **NullableString** | API URL of the Product | [optional] 
**Licenses** |  Pointer to [**[]License**](license) |  | [optional] 
**Attributes** |  Pointer to **map[string]interface{}** | Additional attributes for a product | [optional] 
**Zone** |  Pointer to **string** | Zone | [optional] 
**Status** |  Pointer to **string** | Status of the product | [optional] 
**StatusDateTime** |  Pointer to **time.Time** | Status datetime | [optional] 
**Reason** |  Pointer to **string** | If there&#39;s a tenant provisioning failure then reason will have the description of error | [optional] 
**Notes** |  Pointer to **string** | Product could have additional notes added during tenant provisioning. | [optional] 
**DateCreated** |  Pointer to **NullableTime** | Date when the product was created | [optional] 
**LastUpdated** |  Pointer to **NullableTime** | Date when the product was last updated | [optional] 
**OrgType** |  Pointer to **NullableString** | Type of org | [optional] 

## Methods

### NewProduct

`func NewProduct() *Product`

NewProduct instantiates a new Product object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProductWithDefaults

`func NewProductWithDefaults() *Product`

NewProductWithDefaults instantiates a new Product object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProductName

`func (o *Product) GetProductName() string`

GetProductName returns the ProductName field if non-nil, zero value otherwise.

### GetProductNameOk

`func (o *Product) GetProductNameOk() (*string, bool)`

GetProductNameOk returns a tuple with the ProductName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductName

`func (o *Product) SetProductName(v string)`

SetProductName sets ProductName field to given value.

### HasProductName

`func (o *Product) HasProductName() bool`

HasProductName returns a boolean if a field has been set.

### GetUrl

`func (o *Product) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *Product) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *Product) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *Product) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### GetProductTenantId

`func (o *Product) GetProductTenantId() string`

GetProductTenantId returns the ProductTenantId field if non-nil, zero value otherwise.

### GetProductTenantIdOk

`func (o *Product) GetProductTenantIdOk() (*string, bool)`

GetProductTenantIdOk returns a tuple with the ProductTenantId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductTenantId

`func (o *Product) SetProductTenantId(v string)`

SetProductTenantId sets ProductTenantId field to given value.

### HasProductTenantId

`func (o *Product) HasProductTenantId() bool`

HasProductTenantId returns a boolean if a field has been set.

### GetProductRegion

`func (o *Product) GetProductRegion() string`

GetProductRegion returns the ProductRegion field if non-nil, zero value otherwise.

### GetProductRegionOk

`func (o *Product) GetProductRegionOk() (*string, bool)`

GetProductRegionOk returns a tuple with the ProductRegion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductRegion

`func (o *Product) SetProductRegion(v string)`

SetProductRegion sets ProductRegion field to given value.

### HasProductRegion

`func (o *Product) HasProductRegion() bool`

HasProductRegion returns a boolean if a field has been set.

### GetProductRight

`func (o *Product) GetProductRight() string`

GetProductRight returns the ProductRight field if non-nil, zero value otherwise.

### GetProductRightOk

`func (o *Product) GetProductRightOk() (*string, bool)`

GetProductRightOk returns a tuple with the ProductRight field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProductRight

`func (o *Product) SetProductRight(v string)`

SetProductRight sets ProductRight field to given value.

### HasProductRight

`func (o *Product) HasProductRight() bool`

HasProductRight returns a boolean if a field has been set.

### GetApiUrl

`func (o *Product) GetApiUrl() string`

GetApiUrl returns the ApiUrl field if non-nil, zero value otherwise.

### GetApiUrlOk

`func (o *Product) GetApiUrlOk() (*string, bool)`

GetApiUrlOk returns a tuple with the ApiUrl field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiUrl

`func (o *Product) SetApiUrl(v string)`

SetApiUrl sets ApiUrl field to given value.

### HasApiUrl

`func (o *Product) HasApiUrl() bool`

HasApiUrl returns a boolean if a field has been set.

### SetApiUrlNil

`func (o *Product) SetApiUrlNil(b bool)`

 SetApiUrlNil sets the value for ApiUrl to be an explicit nil

### UnsetApiUrl
`func (o *Product) UnsetApiUrl()`

UnsetApiUrl ensures that no value is present for ApiUrl, not even an explicit nil
### GetLicenses

`func (o *Product) GetLicenses() []License`

GetLicenses returns the Licenses field if non-nil, zero value otherwise.

### GetLicensesOk

`func (o *Product) GetLicensesOk() (*[]License, bool)`

GetLicensesOk returns a tuple with the Licenses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLicenses

`func (o *Product) SetLicenses(v []License)`

SetLicenses sets Licenses field to given value.

### HasLicenses

`func (o *Product) HasLicenses() bool`

HasLicenses returns a boolean if a field has been set.

### GetAttributes

`func (o *Product) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Product) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Product) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *Product) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetZone

`func (o *Product) GetZone() string`

GetZone returns the Zone field if non-nil, zero value otherwise.

### GetZoneOk

`func (o *Product) GetZoneOk() (*string, bool)`

GetZoneOk returns a tuple with the Zone field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetZone

`func (o *Product) SetZone(v string)`

SetZone sets Zone field to given value.

### HasZone

`func (o *Product) HasZone() bool`

HasZone returns a boolean if a field has been set.

### GetStatus

`func (o *Product) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Product) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Product) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Product) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetStatusDateTime

`func (o *Product) GetStatusDateTime() time.Time`

GetStatusDateTime returns the StatusDateTime field if non-nil, zero value otherwise.

### GetStatusDateTimeOk

`func (o *Product) GetStatusDateTimeOk() (*time.Time, bool)`

GetStatusDateTimeOk returns a tuple with the StatusDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatusDateTime

`func (o *Product) SetStatusDateTime(v time.Time)`

SetStatusDateTime sets StatusDateTime field to given value.

### HasStatusDateTime

`func (o *Product) HasStatusDateTime() bool`

HasStatusDateTime returns a boolean if a field has been set.

### GetReason

`func (o *Product) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *Product) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *Product) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *Product) HasReason() bool`

HasReason returns a boolean if a field has been set.

### GetNotes

`func (o *Product) GetNotes() string`

GetNotes returns the Notes field if non-nil, zero value otherwise.

### GetNotesOk

`func (o *Product) GetNotesOk() (*string, bool)`

GetNotesOk returns a tuple with the Notes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotes

`func (o *Product) SetNotes(v string)`

SetNotes sets Notes field to given value.

### HasNotes

`func (o *Product) HasNotes() bool`

HasNotes returns a boolean if a field has been set.

### GetDateCreated

`func (o *Product) GetDateCreated() time.Time`

GetDateCreated returns the DateCreated field if non-nil, zero value otherwise.

### GetDateCreatedOk

`func (o *Product) GetDateCreatedOk() (*time.Time, bool)`

GetDateCreatedOk returns a tuple with the DateCreated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateCreated

`func (o *Product) SetDateCreated(v time.Time)`

SetDateCreated sets DateCreated field to given value.

### HasDateCreated

`func (o *Product) HasDateCreated() bool`

HasDateCreated returns a boolean if a field has been set.

### SetDateCreatedNil

`func (o *Product) SetDateCreatedNil(b bool)`

 SetDateCreatedNil sets the value for DateCreated to be an explicit nil

### UnsetDateCreated
`func (o *Product) UnsetDateCreated()`

UnsetDateCreated ensures that no value is present for DateCreated, not even an explicit nil
### GetLastUpdated

`func (o *Product) GetLastUpdated() time.Time`

GetLastUpdated returns the LastUpdated field if non-nil, zero value otherwise.

### GetLastUpdatedOk

`func (o *Product) GetLastUpdatedOk() (*time.Time, bool)`

GetLastUpdatedOk returns a tuple with the LastUpdated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUpdated

`func (o *Product) SetLastUpdated(v time.Time)`

SetLastUpdated sets LastUpdated field to given value.

### HasLastUpdated

`func (o *Product) HasLastUpdated() bool`

HasLastUpdated returns a boolean if a field has been set.

### SetLastUpdatedNil

`func (o *Product) SetLastUpdatedNil(b bool)`

 SetLastUpdatedNil sets the value for LastUpdated to be an explicit nil

### UnsetLastUpdated
`func (o *Product) UnsetLastUpdated()`

UnsetLastUpdated ensures that no value is present for LastUpdated, not even an explicit nil
### GetOrgType

`func (o *Product) GetOrgType() string`

GetOrgType returns the OrgType field if non-nil, zero value otherwise.

### GetOrgTypeOk

`func (o *Product) GetOrgTypeOk() (*string, bool)`

GetOrgTypeOk returns a tuple with the OrgType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrgType

`func (o *Product) SetOrgType(v string)`

SetOrgType sets OrgType field to given value.

### HasOrgType

`func (o *Product) HasOrgType() bool`

HasOrgType returns a boolean if a field has been set.

### SetOrgTypeNil

`func (o *Product) SetOrgTypeNil(b bool)`

 SetOrgTypeNil sets the value for OrgType to be an explicit nil

### UnsetOrgType
`func (o *Product) UnsetOrgType()`

UnsetOrgType ensures that no value is present for OrgType, not even an explicit nil

[[Back to top]](#) 


