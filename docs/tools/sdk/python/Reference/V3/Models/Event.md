---
id: event
title: Event
pagination_label: Event
sidebar_label: Event
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Event', 'Event'] 
slug: /tools/sdk/go/v3/models/event
tags: ['SDK', 'Software Development Kit', 'Event', 'Event']
---

# Event

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ID of the entitlement. | [optional] 
**Name** | Pointer to **string** | Name of the entitlement. | [optional] 
**Created** | Pointer to **NullableTime** | ISO-8601 date-time referring to the time when the object was created. | [optional] 
**Synced** | Pointer to **string** | ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API.   This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database.  There may be some delay between the `synced` time and the time when the updated data is actually available in the search API.  | [optional] 
**Action** | Pointer to **string** | Name of the event as it's displayed in audit reports. | [optional] 
**Type** | Pointer to **string** | Event type. Refer to [Event Types](https://documentation.sailpoint.com/saas/help/search/index.html#event-types) for a list of event types and their meanings. | [optional] 
**Actor** | Pointer to [**EventActor**](event-actor) |  | [optional] 
**Target** | Pointer to [**EventTarget**](event-target) |  | [optional] 
**Stack** | Pointer to **string** | The event's stack. | [optional] 
**TrackingNumber** | Pointer to **string** | ID of the group of events. | [optional] 
**IpAddress** | Pointer to **string** | Target system's IP address. | [optional] 
**Details** | Pointer to **string** | ID of event's details. | [optional] 
**Attributes** | Pointer to **map[string]interface{}** | Attributes involved in the event. | [optional] 
**Objects** | Pointer to **[]string** | Objects the event is happening to. | [optional] 
**Operation** | Pointer to **string** | Operation, or action, performed during the event. | [optional] 
**Status** | Pointer to **string** | Event status. Refer to [Event Statuses](https://documentation.sailpoint.com/saas/help/search/index.html#event-statuses) for a list of event statuses and their meanings. | [optional] 
**TechnicalName** | Pointer to **string** | Event's normalized name. This normalized name always follows the pattern of 'objects_operation_status'. | [optional] 

## Methods

### NewEvent

`func NewEvent() *Event`

NewEvent instantiates a new Event object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventWithDefaults

`func NewEventWithDefaults() *Event`

NewEventWithDefaults instantiates a new Event object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Event) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Event) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Event) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Event) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Event) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Event) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Event) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Event) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCreated

`func (o *Event) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Event) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Event) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Event) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### SetCreatedNil

`func (o *Event) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *Event) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetSynced

`func (o *Event) GetSynced() string`

GetSynced returns the Synced field if non-nil, zero value otherwise.

### GetSyncedOk

`func (o *Event) GetSyncedOk() (*string, bool)`

GetSyncedOk returns a tuple with the Synced field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSynced

`func (o *Event) SetSynced(v string)`

SetSynced sets Synced field to given value.

### HasSynced

`func (o *Event) HasSynced() bool`

HasSynced returns a boolean if a field has been set.

### GetAction

`func (o *Event) GetAction() string`

GetAction returns the Action field if non-nil, zero value otherwise.

### GetActionOk

`func (o *Event) GetActionOk() (*string, bool)`

GetActionOk returns a tuple with the Action field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAction

`func (o *Event) SetAction(v string)`

SetAction sets Action field to given value.

### HasAction

`func (o *Event) HasAction() bool`

HasAction returns a boolean if a field has been set.

### GetType

`func (o *Event) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Event) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Event) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Event) HasType() bool`

HasType returns a boolean if a field has been set.

### GetActor

`func (o *Event) GetActor() EventActor`

GetActor returns the Actor field if non-nil, zero value otherwise.

### GetActorOk

`func (o *Event) GetActorOk() (*EventActor, bool)`

GetActorOk returns a tuple with the Actor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActor

`func (o *Event) SetActor(v EventActor)`

SetActor sets Actor field to given value.

### HasActor

`func (o *Event) HasActor() bool`

HasActor returns a boolean if a field has been set.

### GetTarget

`func (o *Event) GetTarget() EventTarget`

GetTarget returns the Target field if non-nil, zero value otherwise.

### GetTargetOk

`func (o *Event) GetTargetOk() (*EventTarget, bool)`

GetTargetOk returns a tuple with the Target field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTarget

`func (o *Event) SetTarget(v EventTarget)`

SetTarget sets Target field to given value.

### HasTarget

`func (o *Event) HasTarget() bool`

HasTarget returns a boolean if a field has been set.

### GetStack

`func (o *Event) GetStack() string`

GetStack returns the Stack field if non-nil, zero value otherwise.

### GetStackOk

`func (o *Event) GetStackOk() (*string, bool)`

GetStackOk returns a tuple with the Stack field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStack

`func (o *Event) SetStack(v string)`

SetStack sets Stack field to given value.

### HasStack

`func (o *Event) HasStack() bool`

HasStack returns a boolean if a field has been set.

### GetTrackingNumber

`func (o *Event) GetTrackingNumber() string`

GetTrackingNumber returns the TrackingNumber field if non-nil, zero value otherwise.

### GetTrackingNumberOk

`func (o *Event) GetTrackingNumberOk() (*string, bool)`

GetTrackingNumberOk returns a tuple with the TrackingNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTrackingNumber

`func (o *Event) SetTrackingNumber(v string)`

SetTrackingNumber sets TrackingNumber field to given value.

### HasTrackingNumber

`func (o *Event) HasTrackingNumber() bool`

HasTrackingNumber returns a boolean if a field has been set.

### GetIpAddress

`func (o *Event) GetIpAddress() string`

GetIpAddress returns the IpAddress field if non-nil, zero value otherwise.

### GetIpAddressOk

`func (o *Event) GetIpAddressOk() (*string, bool)`

GetIpAddressOk returns a tuple with the IpAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIpAddress

`func (o *Event) SetIpAddress(v string)`

SetIpAddress sets IpAddress field to given value.

### HasIpAddress

`func (o *Event) HasIpAddress() bool`

HasIpAddress returns a boolean if a field has been set.

### GetDetails

`func (o *Event) GetDetails() string`

GetDetails returns the Details field if non-nil, zero value otherwise.

### GetDetailsOk

`func (o *Event) GetDetailsOk() (*string, bool)`

GetDetailsOk returns a tuple with the Details field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetails

`func (o *Event) SetDetails(v string)`

SetDetails sets Details field to given value.

### HasDetails

`func (o *Event) HasDetails() bool`

HasDetails returns a boolean if a field has been set.

### GetAttributes

`func (o *Event) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Event) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Event) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *Event) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetObjects

`func (o *Event) GetObjects() []string`

GetObjects returns the Objects field if non-nil, zero value otherwise.

### GetObjectsOk

`func (o *Event) GetObjectsOk() (*[]string, bool)`

GetObjectsOk returns a tuple with the Objects field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObjects

`func (o *Event) SetObjects(v []string)`

SetObjects sets Objects field to given value.

### HasObjects

`func (o *Event) HasObjects() bool`

HasObjects returns a boolean if a field has been set.

### GetOperation

`func (o *Event) GetOperation() string`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *Event) GetOperationOk() (*string, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *Event) SetOperation(v string)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *Event) HasOperation() bool`

HasOperation returns a boolean if a field has been set.

### GetStatus

`func (o *Event) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Event) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Event) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Event) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetTechnicalName

`func (o *Event) GetTechnicalName() string`

GetTechnicalName returns the TechnicalName field if non-nil, zero value otherwise.

### GetTechnicalNameOk

`func (o *Event) GetTechnicalNameOk() (*string, bool)`

GetTechnicalNameOk returns a tuple with the TechnicalName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTechnicalName

`func (o *Event) SetTechnicalName(v string)`

SetTechnicalName sets TechnicalName field to given value.

### HasTechnicalName

`func (o *Event) HasTechnicalName() bool`

HasTechnicalName returns a boolean if a field has been set.


