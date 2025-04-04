---
id: beta-provisioning-completed-account-requests-inner-attribute-requests-inner
title: ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner
pagination_label: ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner
sidebar_label: ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner', 'BetaProvisioningCompletedAccountRequestsInnerAttributeRequestsInner'] 
slug: /tools/sdk/go/beta/models/provisioning-completed-account-requests-inner-attribute-requests-inner
tags: ['SDK', 'Software Development Kit', 'ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner', 'BetaProvisioningCompletedAccountRequestsInnerAttributeRequestsInner']
---

# ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeName** | **string** | Name of the attribute being provisioned. | 
**AttributeValue** | Pointer to **NullableString** | Value of the attribute being provisioned. | [optional] 
**Operation** | **string** | The operation to handle the attribute. | 

## Methods

### NewProvisioningCompletedAccountRequestsInnerAttributeRequestsInner

`func NewProvisioningCompletedAccountRequestsInnerAttributeRequestsInner(attributeName string, operation string, ) *ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner`

NewProvisioningCompletedAccountRequestsInnerAttributeRequestsInner instantiates a new ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProvisioningCompletedAccountRequestsInnerAttributeRequestsInnerWithDefaults

`func NewProvisioningCompletedAccountRequestsInnerAttributeRequestsInnerWithDefaults() *ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner`

NewProvisioningCompletedAccountRequestsInnerAttributeRequestsInnerWithDefaults instantiates a new ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttributeName

`func (o *ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner) GetAttributeName() string`

GetAttributeName returns the AttributeName field if non-nil, zero value otherwise.

### GetAttributeNameOk

`func (o *ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner) GetAttributeNameOk() (*string, bool)`

GetAttributeNameOk returns a tuple with the AttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeName

`func (o *ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner) SetAttributeName(v string)`

SetAttributeName sets AttributeName field to given value.


### GetAttributeValue

`func (o *ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner) GetAttributeValue() string`

GetAttributeValue returns the AttributeValue field if non-nil, zero value otherwise.

### GetAttributeValueOk

`func (o *ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner) GetAttributeValueOk() (*string, bool)`

GetAttributeValueOk returns a tuple with the AttributeValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeValue

`func (o *ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner) SetAttributeValue(v string)`

SetAttributeValue sets AttributeValue field to given value.

### HasAttributeValue

`func (o *ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner) HasAttributeValue() bool`

HasAttributeValue returns a boolean if a field has been set.

### SetAttributeValueNil

`func (o *ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner) SetAttributeValueNil(b bool)`

 SetAttributeValueNil sets the value for AttributeValue to be an explicit nil

### UnsetAttributeValue
`func (o *ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner) UnsetAttributeValue()`

UnsetAttributeValue ensures that no value is present for AttributeValue, not even an explicit nil
### GetOperation

`func (o *ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner) GetOperation() string`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner) GetOperationOk() (*string, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *ProvisioningCompletedAccountRequestsInnerAttributeRequestsInner) SetOperation(v string)`

SetOperation sets Operation field to given value.



