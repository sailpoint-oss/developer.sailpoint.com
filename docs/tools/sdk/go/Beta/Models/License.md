---
id: license
title: License
pagination_label: License
sidebar_label: License
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'License'] 
slug: /tools/sdk/go/beta/models/license
tags: ['SDK', 'Software Development Kit', 'License']
---

# License

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LicenseId** |  Pointer to **string** | Name of the license | [optional] 
**LegacyFeatureName** |  Pointer to **string** | Legacy name of the license | [optional] 

## Methods

### NewLicense

`func NewLicense() *License`

NewLicense instantiates a new License object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLicenseWithDefaults

`func NewLicenseWithDefaults() *License`

NewLicenseWithDefaults instantiates a new License object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLicenseId

`func (o *License) GetLicenseId() string`

GetLicenseId returns the LicenseId field if non-nil, zero value otherwise.

### GetLicenseIdOk

`func (o *License) GetLicenseIdOk() (*string, bool)`

GetLicenseIdOk returns a tuple with the LicenseId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLicenseId

`func (o *License) SetLicenseId(v string)`

SetLicenseId sets LicenseId field to given value.

### HasLicenseId

`func (o *License) HasLicenseId() bool`

HasLicenseId returns a boolean if a field has been set.

### GetLegacyFeatureName

`func (o *License) GetLegacyFeatureName() string`

GetLegacyFeatureName returns the LegacyFeatureName field if non-nil, zero value otherwise.

### GetLegacyFeatureNameOk

`func (o *License) GetLegacyFeatureNameOk() (*string, bool)`

GetLegacyFeatureNameOk returns a tuple with the LegacyFeatureName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLegacyFeatureName

`func (o *License) SetLegacyFeatureName(v string)`

SetLegacyFeatureName sets LegacyFeatureName field to given value.

### HasLegacyFeatureName

`func (o *License) HasLegacyFeatureName() bool`

HasLegacyFeatureName returns a boolean if a field has been set.


[[Back to top]](#) 


