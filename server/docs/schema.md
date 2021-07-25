# Possible schema
 This isn't meant to be production code,
 just a general idea of what our TypeORM schemas might be
 

```typescript

interface User {
	id: number;
	email: string;
	userName: string; // this is required. how else would we identify them in a user friendly way
	name: string; // maybe they want to be anonymous?
}

interface ActivityRecord {
	user: User;
	dateTime: Date; // UTC, down to minute.
	activity: Activity; // Activity will define what the 'magnitude' actually means
	magnitude: number; // just record a number (or more? how about repetitions - For now, just add a separate row for each 'rep')
}

interface Metric {
	id: number;
	name: string;
}

interface Activity {
	id: number;
	name: string; // Pushups???
	metric: Metric; // 20 times
}
```