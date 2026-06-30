---
id: v1-provisioningcompleted-account-requests-inner
title: ProvisioningcompletedAccountRequestsInner
pagination_label: ProvisioningcompletedAccountRequestsInner
sidebar_label: ProvisioningcompletedAccountRequestsInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ProvisioningcompletedAccountRequestsInner', 'V1ProvisioningcompletedAccountRequestsInner'] 
slug: /tools/sdk/go/triggers/models/provisioningcompleted-account-requests-inner
tags: ['SDK', 'Software Development Kit', 'ProvisioningcompletedAccountRequestsInner', 'V1ProvisioningcompletedAccountRequestsInner']
---

# ProvisioningcompletedAccountRequestsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Source** | [**ProvisioningcompletedAccountRequestsInnerSource**](provisioningcompleted-account-requests-inner-source) |  | 
**AccountId** | Pointer to **string** | The unique idenfier of the account being provisioned. | [optional] 
**AccountOperation** | **string** | The provisioning operation; typically Create, Modify, Enable, Disable, Unlock, or Delete. | 
**ProvisioningResult** | **string** | The overall result of the provisioning transaction; this could be success, pending, failed, etc. | 
**ProvisioningTarget** | **string** | The name of the provisioning channel selected; this could be the same as the source, or could be a Service Desk Integration Module (SDIM). | 
**TicketId** | Pointer to **NullableString** | A reference to a tracking number, if this is sent to a Service Desk Integration Module (SDIM). | [optional] 
**AttributeRequests** | Pointer to [**[]ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner**](provisioningcompleted-account-requests-inner-attribute-requests-inner) | A list of attributes as part of the provisioning transaction. | [optional] 

## Methods

### NewProvisioningcompletedAccountRequestsInner

`func NewProvisioningcompletedAccountRequestsInner(source ProvisioningcompletedAccountRequestsInnerSource, accountOperation string, provisioningResult string, provisioningTarget string, ) *ProvisioningcompletedAccountRequestsInner`

NewProvisioningcompletedAccountRequestsInner instantiates a new ProvisioningcompletedAccountRequestsInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProvisioningcompletedAccountRequestsInnerWithDefaults

`func NewProvisioningcompletedAccountRequestsInnerWithDefaults() *ProvisioningcompletedAccountRequestsInner`

NewProvisioningcompletedAccountRequestsInnerWithDefaults instantiates a new ProvisioningcompletedAccountRequestsInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSource

`func (o *ProvisioningcompletedAccountRequestsInner) GetSource() ProvisioningcompletedAccountRequestsInnerSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *ProvisioningcompletedAccountRequestsInner) GetSourceOk() (*ProvisioningcompletedAccountRequestsInnerSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *ProvisioningcompletedAccountRequestsInner) SetSource(v ProvisioningcompletedAccountRequestsInnerSource)`

SetSource sets Source field to given value.


### GetAccountId

`func (o *ProvisioningcompletedAccountRequestsInner) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *ProvisioningcompletedAccountRequestsInner) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *ProvisioningcompletedAccountRequestsInner) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *ProvisioningcompletedAccountRequestsInner) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetAccountOperation

`func (o *ProvisioningcompletedAccountRequestsInner) GetAccountOperation() string`

GetAccountOperation returns the AccountOperation field if non-nil, zero value otherwise.

### GetAccountOperationOk

`func (o *ProvisioningcompletedAccountRequestsInner) GetAccountOperationOk() (*string, bool)`

GetAccountOperationOk returns a tuple with the AccountOperation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountOperation

`func (o *ProvisioningcompletedAccountRequestsInner) SetAccountOperation(v string)`

SetAccountOperation sets AccountOperation field to given value.


### GetProvisioningResult

`func (o *ProvisioningcompletedAccountRequestsInner) GetProvisioningResult() string`

GetProvisioningResult returns the ProvisioningResult field if non-nil, zero value otherwise.

### GetProvisioningResultOk

`func (o *ProvisioningcompletedAccountRequestsInner) GetProvisioningResultOk() (*string, bool)`

GetProvisioningResultOk returns a tuple with the ProvisioningResult field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisioningResult

`func (o *ProvisioningcompletedAccountRequestsInner) SetProvisioningResult(v string)`

SetProvisioningResult sets ProvisioningResult field to given value.


### GetProvisioningTarget

`func (o *ProvisioningcompletedAccountRequestsInner) GetProvisioningTarget() string`

GetProvisioningTarget returns the ProvisioningTarget field if non-nil, zero value otherwise.

### GetProvisioningTargetOk

`func (o *ProvisioningcompletedAccountRequestsInner) GetProvisioningTargetOk() (*string, bool)`

GetProvisioningTargetOk returns a tuple with the ProvisioningTarget field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisioningTarget

`func (o *ProvisioningcompletedAccountRequestsInner) SetProvisioningTarget(v string)`

SetProvisioningTarget sets ProvisioningTarget field to given value.


### GetTicketId

`func (o *ProvisioningcompletedAccountRequestsInner) GetTicketId() string`

GetTicketId returns the TicketId field if non-nil, zero value otherwise.

### GetTicketIdOk

`func (o *ProvisioningcompletedAccountRequestsInner) GetTicketIdOk() (*string, bool)`

GetTicketIdOk returns a tuple with the TicketId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTicketId

`func (o *ProvisioningcompletedAccountRequestsInner) SetTicketId(v string)`

SetTicketId sets TicketId field to given value.

### HasTicketId

`func (o *ProvisioningcompletedAccountRequestsInner) HasTicketId() bool`

HasTicketId returns a boolean if a field has been set.

### SetTicketIdNil

`func (o *ProvisioningcompletedAccountRequestsInner) SetTicketIdNil(b bool)`

 SetTicketIdNil sets the value for TicketId to be an explicit nil

### UnsetTicketId
`func (o *ProvisioningcompletedAccountRequestsInner) UnsetTicketId()`

UnsetTicketId ensures that no value is present for TicketId, not even an explicit nil
### GetAttributeRequests

`func (o *ProvisioningcompletedAccountRequestsInner) GetAttributeRequests() []ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner`

GetAttributeRequests returns the AttributeRequests field if non-nil, zero value otherwise.

### GetAttributeRequestsOk

`func (o *ProvisioningcompletedAccountRequestsInner) GetAttributeRequestsOk() (*[]ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner, bool)`

GetAttributeRequestsOk returns a tuple with the AttributeRequests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeRequests

`func (o *ProvisioningcompletedAccountRequestsInner) SetAttributeRequests(v []ProvisioningcompletedAccountRequestsInnerAttributeRequestsInner)`

SetAttributeRequests sets AttributeRequests field to given value.

### HasAttributeRequests

`func (o *ProvisioningcompletedAccountRequestsInner) HasAttributeRequests() bool`

HasAttributeRequests returns a boolean if a field has been set.

### SetAttributeRequestsNil

`func (o *ProvisioningcompletedAccountRequestsInner) SetAttributeRequestsNil(b bool)`

 SetAttributeRequestsNil sets the value for AttributeRequests to be an explicit nil

### UnsetAttributeRequests
`func (o *ProvisioningcompletedAccountRequestsInner) UnsetAttributeRequests()`

UnsetAttributeRequests ensures that no value is present for AttributeRequests, not even an explicit nil

