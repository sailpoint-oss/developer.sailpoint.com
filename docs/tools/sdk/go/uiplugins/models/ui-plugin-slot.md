# UIPluginSlot

# UIPluginSlot

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SlotId** | **string** | Identifier of the UI extension point | 
**Name** | [**UIPluginSlotName**](ui-plugin-slot-name) |  | 
**Description** | [**UIPluginSlotDescription**](ui-plugin-slot-description) |  | 
**State** | **SlotState** |  | 
**InputSchema** | **map[string]interface\{\}** | JSON Schema for data the App Shell provides to plugins in this slot | 
**SlotType** | **SlotType** |  | 
**MaxPlugins** | **int32** | Max concurrent plugins in this slot; `-1` means unlimited | 

## Methods

### NewUIPluginSlot

`func NewUIPluginSlot(slotId string, name UIPluginSlotName, description UIPluginSlotDescription, state SlotState, inputSchema map[string]interface{}, slotType SlotType, maxPlugins int32, ) *UIPluginSlot`

NewUIPluginSlot instantiates a new UIPluginSlot object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUIPluginSlotWithDefaults

`func NewUIPluginSlotWithDefaults() *UIPluginSlot`

NewUIPluginSlotWithDefaults instantiates a new UIPluginSlot object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSlotId

`func (o *UIPluginSlot) GetSlotId() string`

GetSlotId returns the SlotId field if non-nil, zero value otherwise.

### GetSlotIdOk

`func (o *UIPluginSlot) GetSlotIdOk() (*string, bool)`

GetSlotIdOk returns a tuple with the SlotId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlotId

`func (o *UIPluginSlot) SetSlotId(v string)`

SetSlotId sets SlotId field to given value.


### GetName

`func (o *UIPluginSlot) GetName() UIPluginSlotName`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *UIPluginSlot) GetNameOk() (*UIPluginSlotName, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *UIPluginSlot) SetName(v UIPluginSlotName)`

SetName sets Name field to given value.


### GetDescription

`func (o *UIPluginSlot) GetDescription() UIPluginSlotDescription`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *UIPluginSlot) GetDescriptionOk() (*UIPluginSlotDescription, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *UIPluginSlot) SetDescription(v UIPluginSlotDescription)`

SetDescription sets Description field to given value.


### GetState

`func (o *UIPluginSlot) GetState() SlotState`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *UIPluginSlot) GetStateOk() (*SlotState, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *UIPluginSlot) SetState(v SlotState)`

SetState sets State field to given value.


### GetInputSchema

`func (o *UIPluginSlot) GetInputSchema() map[string]interface{}`

GetInputSchema returns the InputSchema field if non-nil, zero value otherwise.

### GetInputSchemaOk

`func (o *UIPluginSlot) GetInputSchemaOk() (*map[string]interface{}, bool)`

GetInputSchemaOk returns a tuple with the InputSchema field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInputSchema

`func (o *UIPluginSlot) SetInputSchema(v map[string]interface{})`

SetInputSchema sets InputSchema field to given value.


### GetSlotType

`func (o *UIPluginSlot) GetSlotType() SlotType`

GetSlotType returns the SlotType field if non-nil, zero value otherwise.

### GetSlotTypeOk

`func (o *UIPluginSlot) GetSlotTypeOk() (*SlotType, bool)`

GetSlotTypeOk returns a tuple with the SlotType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlotType

`func (o *UIPluginSlot) SetSlotType(v SlotType)`

SetSlotType sets SlotType field to given value.


### GetMaxPlugins

`func (o *UIPluginSlot) GetMaxPlugins() int32`

GetMaxPlugins returns the MaxPlugins field if non-nil, zero value otherwise.

### GetMaxPluginsOk

`func (o *UIPluginSlot) GetMaxPluginsOk() (*int32, bool)`

GetMaxPluginsOk returns a tuple with the MaxPlugins field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxPlugins

`func (o *UIPluginSlot) SetMaxPlugins(v int32)`

SetMaxPlugins sets MaxPlugins field to given value.



