---
id: v2024-access-item-removed
title: AccessItemRemoved
pagination_label: AccessItemRemoved
sidebar_label: AccessItemRemoved
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessItemRemoved', 'V2024AccessItemRemoved'] 
slug: /tools/sdk/go/v2024/models/access-item-removed
tags: ['SDK', 'Software Development Kit', 'AccessItemRemoved', 'V2024AccessItemRemoved']
---

# AccessItemRemoved

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessItem** | Pointer to [**AccessItemAssociatedAccessItem**](access-item-associated-access-item) |  | [optional] 
**IdentityId** | Pointer to **string** | the identity id | [optional] 
**EventType** | Pointer to **string** | the event type | [optional] 
**Dt** | Pointer to **string** | the date of event | [optional] 
**GovernanceEvent** | Pointer to [**CorrelatedGovernanceEvent**](correlated-governance-event) |  | [optional] 

## Methods

### NewAccessItemRemoved

`func NewAccessItemRemoved() *AccessItemRemoved`

NewAccessItemRemoved instantiates a new AccessItemRemoved object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessItemRemovedWithDefaults

`func NewAccessItemRemovedWithDefaults() *AccessItemRemoved`

NewAccessItemRemovedWithDefaults instantiates a new AccessItemRemoved object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessItem

`func (o *AccessItemRemoved) GetAccessItem() AccessItemAssociatedAccessItem`

GetAccessItem returns the AccessItem field if non-nil, zero value otherwise.

### GetAccessItemOk

`func (o *AccessItemRemoved) GetAccessItemOk() (*AccessItemAssociatedAccessItem, bool)`

GetAccessItemOk returns a tuple with the AccessItem field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessItem

`func (o *AccessItemRemoved) SetAccessItem(v AccessItemAssociatedAccessItem)`

SetAccessItem sets AccessItem field to given value.

### HasAccessItem

`func (o *AccessItemRemoved) HasAccessItem() bool`

HasAccessItem returns a boolean if a field has been set.

### GetIdentityId

`func (o *AccessItemRemoved) GetIdentityId() string`

GetIdentityId returns the IdentityId field if non-nil, zero value otherwise.

### GetIdentityIdOk

`func (o *AccessItemRemoved) GetIdentityIdOk() (*string, bool)`

GetIdentityIdOk returns a tuple with the IdentityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityId

`func (o *AccessItemRemoved) SetIdentityId(v string)`

SetIdentityId sets IdentityId field to given value.

### HasIdentityId

`func (o *AccessItemRemoved) HasIdentityId() bool`

HasIdentityId returns a boolean if a field has been set.

### GetEventType

`func (o *AccessItemRemoved) GetEventType() string`

GetEventType returns the EventType field if non-nil, zero value otherwise.

### GetEventTypeOk

`func (o *AccessItemRemoved) GetEventTypeOk() (*string, bool)`

GetEventTypeOk returns a tuple with the EventType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventType

`func (o *AccessItemRemoved) SetEventType(v string)`

SetEventType sets EventType field to given value.

### HasEventType

`func (o *AccessItemRemoved) HasEventType() bool`

HasEventType returns a boolean if a field has been set.

### GetDt

`func (o *AccessItemRemoved) GetDt() string`

GetDt returns the Dt field if non-nil, zero value otherwise.

### GetDtOk

`func (o *AccessItemRemoved) GetDtOk() (*string, bool)`

GetDtOk returns a tuple with the Dt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDt

`func (o *AccessItemRemoved) SetDt(v string)`

SetDt sets Dt field to given value.

### HasDt

`func (o *AccessItemRemoved) HasDt() bool`

HasDt returns a boolean if a field has been set.

### GetGovernanceEvent

`func (o *AccessItemRemoved) GetGovernanceEvent() CorrelatedGovernanceEvent`

GetGovernanceEvent returns the GovernanceEvent field if non-nil, zero value otherwise.

### GetGovernanceEventOk

`func (o *AccessItemRemoved) GetGovernanceEventOk() (*CorrelatedGovernanceEvent, bool)`

GetGovernanceEventOk returns a tuple with the GovernanceEvent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGovernanceEvent

`func (o *AccessItemRemoved) SetGovernanceEvent(v CorrelatedGovernanceEvent)`

SetGovernanceEvent sets GovernanceEvent field to given value.

### HasGovernanceEvent

`func (o *AccessItemRemoved) HasGovernanceEvent() bool`

HasGovernanceEvent returns a boolean if a field has been set.


