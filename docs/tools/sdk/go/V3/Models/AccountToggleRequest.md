---
id: account-toggle-request
title: AccountToggleRequest
pagination_label: AccountToggleRequest
sidebar_label: AccountToggleRequest
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'AccountToggleRequest'] 
slug: /tools/sdk/go/v3/models/account-toggle-request
tags: ['SDK', 'Software Development Kit', 'AccountToggleRequest']
---

# AccountToggleRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExternalVerificationId** |  Pointer to **string** | If set, an external process validates that the user wants to proceed with this request. | [optional] 
**ForceProvisioning** |  Pointer to **bool** | If set, provisioning updates the account attribute at the source.   This option is used when the account is not synced to ensure the attribute is updated. Providing &#39;true&#39; for an unlocked account will add and process &#39;Unlock&#39; operation by the workflow. | [optional] 

## Methods

### NewAccountToggleRequest

`func NewAccountToggleRequest() *AccountToggleRequest`

NewAccountToggleRequest instantiates a new AccountToggleRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountToggleRequestWithDefaults

`func NewAccountToggleRequestWithDefaults() *AccountToggleRequest`

NewAccountToggleRequestWithDefaults instantiates a new AccountToggleRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExternalVerificationId

`func (o *AccountToggleRequest) GetExternalVerificationId() string`

GetExternalVerificationId returns the ExternalVerificationId field if non-nil, zero value otherwise.

### GetExternalVerificationIdOk

`func (o *AccountToggleRequest) GetExternalVerificationIdOk() (*string, bool)`

GetExternalVerificationIdOk returns a tuple with the ExternalVerificationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalVerificationId

`func (o *AccountToggleRequest) SetExternalVerificationId(v string)`

SetExternalVerificationId sets ExternalVerificationId field to given value.

### HasExternalVerificationId

`func (o *AccountToggleRequest) HasExternalVerificationId() bool`

HasExternalVerificationId returns a boolean if a field has been set.

### GetForceProvisioning

`func (o *AccountToggleRequest) GetForceProvisioning() bool`

GetForceProvisioning returns the ForceProvisioning field if non-nil, zero value otherwise.

### GetForceProvisioningOk

`func (o *AccountToggleRequest) GetForceProvisioningOk() (*bool, bool)`

GetForceProvisioningOk returns a tuple with the ForceProvisioning field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForceProvisioning

`func (o *AccountToggleRequest) SetForceProvisioning(v bool)`

SetForceProvisioning sets ForceProvisioning field to given value.

### HasForceProvisioning

`func (o *AccountToggleRequest) HasForceProvisioning() bool`

HasForceProvisioning returns a boolean if a field has been set.


[[Back to top]](#) 


