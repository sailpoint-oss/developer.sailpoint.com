---
id: v1-provisioningcompleted-account-requests-inner-attribute-requests-inner
title: ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner
pagination_label: ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner
sidebar_label: ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner', 'V1ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner'] 
slug: /tools/sdk/go/triggers/models/provisioningcompleted-account-requests-inner-attribute-requests-inner
tags: ['SDK', 'Software Development Kit', 'ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner', 'V1ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner']
---

# ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeName** | **string** | The name of the attribute being provisioned. | 
**AttributeValue** | Pointer to **NullableString** | The value of the attribute being provisioned. | [optional] 
**Operation** | **string** | The operation to handle the attribute. | 

## Methods

### NewProvisioningcompletedAccountRequestsInnerAttributeRequestsInner

`func NewProvisioningcompletedAccountRequestsInnerAttributeRequestsInner(attributeName string, operation string, ) *ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner`

NewProvisioningcompletedAccountRequestsInnerAttributeRequestsInner instantiates a new ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProvisioningcompletedAccountRequestsInnerAttributeRequestsInnerWithDefaults

`func NewProvisioningcompletedAccountRequestsInnerAttributeRequestsInnerWithDefaults() *ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner`

NewProvisioningcompletedAccountRequestsInnerAttributeRequestsInnerWithDefaults instantiates a new ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttributeName

`func (o *ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner) GetAttributeName() string`

GetAttributeName returns the AttributeName field if non-nil, zero value otherwise.

### GetAttributeNameOk

`func (o *ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner) GetAttributeNameOk() (*string, bool)`

GetAttributeNameOk returns a tuple with the AttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeName

`func (o *ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner) SetAttributeName(v string)`

SetAttributeName sets AttributeName field to given value.


### GetAttributeValue

`func (o *ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner) GetAttributeValue() string`

GetAttributeValue returns the AttributeValue field if non-nil, zero value otherwise.

### GetAttributeValueOk

`func (o *ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner) GetAttributeValueOk() (*string, bool)`

GetAttributeValueOk returns a tuple with the AttributeValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeValue

`func (o *ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner) SetAttributeValue(v string)`

SetAttributeValue sets AttributeValue field to given value.

### HasAttributeValue

`func (o *ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner) HasAttributeValue() bool`

HasAttributeValue returns a boolean if a field has been set.

### SetAttributeValueNil

`func (o *ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner) SetAttributeValueNil(b bool)`

 SetAttributeValueNil sets the value for AttributeValue to be an explicit nil

### UnsetAttributeValue
`func (o *ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner) UnsetAttributeValue()`

UnsetAttributeValue ensures that no value is present for AttributeValue, not even an explicit nil
### GetOperation

`func (o *ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner) GetOperation() string`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner) GetOperationOk() (*string, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner) SetOperation(v string)`

SetOperation sets Operation field to given value.



