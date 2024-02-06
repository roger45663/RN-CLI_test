package com.awesomeproject2;
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule // React Native 提供的擴展模組，可以取得 ReactApplicationContext 的環境(生命週期)
import com.facebook.react.bridge.ReactMethod
import android.util.Log
import com.facebook.react.bridge.Callback

class CalendarModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    // 如果想要寫 React Native 原生的擴展模組，需要有這個 getName，表示模組名稱
    override fun getName() = "CalendarModule"

    // 要暴露出來的方法都要加上 @ReactMethod
    @ReactMethod fun createCalendarEvent(name: String, location: String, callback: Callback) {
        Log.d("CalendarModule", "Create event called with name: $name and location: $location")
        val eventId = "fakeEventID"
        callback.invoke(null, eventId)
    }

    override fun getConstants(): MutableMap<String, Any> =
        hashMapOf("DEFAULT_EVENT_NAME" to "New Event")
}

