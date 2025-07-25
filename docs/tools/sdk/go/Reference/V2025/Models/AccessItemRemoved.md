---
id: v2025-access-item-removed
title: AccessItemRemoved
pagination_label: AccessItemRemoved
sidebar_label: AccessItemRemoved
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessItemRemoved', 'V2025AccessItemRemoved'] 
slug: /tools/sdk/go/v2025/models/access-item-removed
tags: ['SDK', 'Software Development Kit', 'AccessItemRemoved', 'V2025AccessItemRemoved']
---

# AccessItemRemoved

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessItem** | [**AccessItemAssociatedAccessItem**](access-item-associated-access-item) |  | 
**IdentityId** | Pointer to **string** | the identity id | [optional] 
**EventType** | Pointer to **string** | the event type | [optional] 
**DateTime** | Pointer to **string** | the date of event | [optional] 
**AccessItemType** | Pointer to **string** | the access item type | [optional] 
**GovernanceEvent** | Pointer to [**NullableCorrelatedGovernanceEvent**](correlated-governance-event) |  | [optional] 

## Methods

### NewAccessItemRemoved

`func NewAccessItemRemoved(accessItem AccessItemAssociatedAccessItem, ) *AccessItemRemoved`

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

### GetDateTime

`func (o *AccessItemRemoved) GetDateTime() string`

GetDateTime returns the DateTime field if non-nil, zero value otherwise.

### GetDateTimeOk

`func (o *AccessItemRemoved) GetDateTimeOk() (*string, bool)`

GetDateTimeOk returns a tuple with the DateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateTime

`func (o *AccessItemRemoved) SetDateTime(v string)`

SetDateTime sets DateTime field to given value.

### HasDateTime

`func (o *AccessItemRemoved) HasDateTime() bool`

HasDateTime returns a boolean if a field has been set.

### GetAccessItemType

`func (o *AccessItemRemoved) GetAccessItemType() string`

GetAccessItemType returns the AccessItemType field if non-nil, zero value otherwise.

### GetAccessItemTypeOk

`func (o *AccessItemRemoved) GetAccessItemTypeOk() (*string, bool)`

GetAccessItemTypeOk returns a tuple with the AccessItemType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessItemType

`func (o *AccessItemRemoved) SetAccessItemType(v string)`

SetAccessItemType sets AccessItemType field to given value.

### HasAccessItemType

`func (o *AccessItemRemoved) HasAccessItemType() bool`

HasAccessItemType returns a boolean if a field has been set.

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

### SetGovernanceEventNil

`func (o *AccessItemRemoved) SetGovernanceEventNil(b bool)`

 SetGovernanceEventNil sets the value for GovernanceEvent to be an explicit nil

### UnsetGovernanceEvent
`func (o *AccessItemRemoved) UnsetGovernanceEvent()`

UnsetGovernanceEvent ensures that no value is present for GovernanceEvent, not even an explicit nil

