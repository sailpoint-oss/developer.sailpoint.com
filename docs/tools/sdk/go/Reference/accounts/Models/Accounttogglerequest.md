---
id: v1-accounttogglerequest
title: Accounttogglerequest
pagination_label: Accounttogglerequest
sidebar_label: Accounttogglerequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accounttogglerequest', 'V1Accounttogglerequest'] 
slug: /tools/sdk/go/accounts/models/accounttogglerequest
tags: ['SDK', 'Software Development Kit', 'Accounttogglerequest', 'V1Accounttogglerequest']
---

# Accounttogglerequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExternalVerificationId** | Pointer to **string** | If set, an external process validates that the user wants to proceed with this request. | [optional] 
**ForceProvisioning** | Pointer to **bool** | If set, provisioning updates the account attribute at the source.   This option is used when the account is not synced to ensure the attribute is updated. Providing 'true' for an unlocked account will add and process 'Unlock' operation by the workflow. | [optional] 

## Methods

### NewAccounttogglerequest

`func NewAccounttogglerequest() *Accounttogglerequest`

NewAccounttogglerequest instantiates a new Accounttogglerequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccounttogglerequestWithDefaults

`func NewAccounttogglerequestWithDefaults() *Accounttogglerequest`

NewAccounttogglerequestWithDefaults instantiates a new Accounttogglerequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExternalVerificationId

`func (o *Accounttogglerequest) GetExternalVerificationId() string`

GetExternalVerificationId returns the ExternalVerificationId field if non-nil, zero value otherwise.

### GetExternalVerificationIdOk

`func (o *Accounttogglerequest) GetExternalVerificationIdOk() (*string, bool)`

GetExternalVerificationIdOk returns a tuple with the ExternalVerificationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalVerificationId

`func (o *Accounttogglerequest) SetExternalVerificationId(v string)`

SetExternalVerificationId sets ExternalVerificationId field to given value.

### HasExternalVerificationId

`func (o *Accounttogglerequest) HasExternalVerificationId() bool`

HasExternalVerificationId returns a boolean if a field has been set.

### GetForceProvisioning

`func (o *Accounttogglerequest) GetForceProvisioning() bool`

GetForceProvisioning returns the ForceProvisioning field if non-nil, zero value otherwise.

### GetForceProvisioningOk

`func (o *Accounttogglerequest) GetForceProvisioningOk() (*bool, bool)`

GetForceProvisioningOk returns a tuple with the ForceProvisioning field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForceProvisioning

`func (o *Accounttogglerequest) SetForceProvisioning(v bool)`

SetForceProvisioning sets ForceProvisioning field to given value.

### HasForceProvisioning

`func (o *Accounttogglerequest) HasForceProvisioning() bool`

HasForceProvisioning returns a boolean if a field has been set.


