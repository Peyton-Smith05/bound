# React native notes

## Pressable 

* new updated version of touchable opacity
* contains an `onPressIn` which is called on press in
* `onPressOut` when released/deactivated
* after onPressIn if the person leaves their finger longer than 500 milliseconds before onPressOut then onLongPress is triggered
* It has an optional `HitRect` Which allows you to expand how far out a touch can still register
    * **Note** touch area never extends past parent view
* This could be good for notes when reordering content or in lists 
