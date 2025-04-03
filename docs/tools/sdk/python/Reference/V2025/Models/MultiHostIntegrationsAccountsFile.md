---
id: v2025-multi-host-integrations-accounts-file
title: MultiHostIntegrationsAccountsFile
pagination_label: MultiHostIntegrationsAccountsFile
sidebar_label: MultiHostIntegrationsAccountsFile
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MultiHostIntegrationsAccountsFile', 'V2025MultiHostIntegrationsAccountsFile'] 
slug: /tools/sdk/go/v2025/models/multi-host-integrations-accounts-file
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegrationsAccountsFile', 'V2025MultiHostIntegrationsAccountsFile']
---

# MultiHostIntegrationsAccountsFile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Name of the accounts file. | [optional] 
**Key** | Pointer to **string** | The accounts file key. | [optional] 
**UploadTime** | Pointer to **SailPointTime** | Date-time when the file was uploaded | [optional] 
**Expiry** | Pointer to **SailPointTime** | Date-time when the accounts file expired. | [optional] 
**Expired** | Pointer to **bool** | If this is true, it indicates that the accounts file has expired. | [optional] [default to false]

## Methods

### NewMultiHostIntegrationsAccountsFile

`func NewMultiHostIntegrationsAccountsFile() *MultiHostIntegrationsAccountsFile`

NewMultiHostIntegrationsAccountsFile instantiates a new MultiHostIntegrationsAccountsFile object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMultiHostIntegrationsAccountsFileWithDefaults

`func NewMultiHostIntegrationsAccountsFileWithDefaults() *MultiHostIntegrationsAccountsFile`

NewMultiHostIntegrationsAccountsFileWithDefaults instantiates a new MultiHostIntegrationsAccountsFile object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *MultiHostIntegrationsAccountsFile) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MultiHostIntegrationsAccountsFile) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MultiHostIntegrationsAccountsFile) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *MultiHostIntegrationsAccountsFile) HasName() bool`

HasName returns a boolean if a field has been set.

### GetKey

`func (o *MultiHostIntegrationsAccountsFile) GetKey() string`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *MultiHostIntegrationsAccountsFile) GetKeyOk() (*string, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *MultiHostIntegrationsAccountsFile) SetKey(v string)`

SetKey sets Key field to given value.

### HasKey

`func (o *MultiHostIntegrationsAccountsFile) HasKey() bool`

HasKey returns a boolean if a field has been set.

### GetUploadTime

`func (o *MultiHostIntegrationsAccountsFile) GetUploadTime() SailPointTime`

GetUploadTime returns the UploadTime field if non-nil, zero value otherwise.

### GetUploadTimeOk

`func (o *MultiHostIntegrationsAccountsFile) GetUploadTimeOk() (*SailPointTime, bool)`

GetUploadTimeOk returns a tuple with the UploadTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUploadTime

`func (o *MultiHostIntegrationsAccountsFile) SetUploadTime(v SailPointTime)`

SetUploadTime sets UploadTime field to given value.

### HasUploadTime

`func (o *MultiHostIntegrationsAccountsFile) HasUploadTime() bool`

HasUploadTime returns a boolean if a field has been set.

### GetExpiry

`func (o *MultiHostIntegrationsAccountsFile) GetExpiry() SailPointTime`

GetExpiry returns the Expiry field if non-nil, zero value otherwise.

### GetExpiryOk

`func (o *MultiHostIntegrationsAccountsFile) GetExpiryOk() (*SailPointTime, bool)`

GetExpiryOk returns a tuple with the Expiry field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiry

`func (o *MultiHostIntegrationsAccountsFile) SetExpiry(v SailPointTime)`

SetExpiry sets Expiry field to given value.

### HasExpiry

`func (o *MultiHostIntegrationsAccountsFile) HasExpiry() bool`

HasExpiry returns a boolean if a field has been set.

### GetExpired

`func (o *MultiHostIntegrationsAccountsFile) GetExpired() bool`

GetExpired returns the Expired field if non-nil, zero value otherwise.

### GetExpiredOk

`func (o *MultiHostIntegrationsAccountsFile) GetExpiredOk() (*bool, bool)`

GetExpiredOk returns a tuple with the Expired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpired

`func (o *MultiHostIntegrationsAccountsFile) SetExpired(v bool)`

SetExpired sets Expired field to given value.

### HasExpired

`func (o *MultiHostIntegrationsAccountsFile) HasExpired() bool`

HasExpired returns a boolean if a field has been set.


