import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListSignalsComponent } from './todo-list-signals.component';

describe('TodoListSignalsComponent', () => {
  let component: TodoListSignalsComponent;
  let fixture: ComponentFixture<TodoListSignalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoListSignalsComponent]
    });
    fixture = TestBed.createComponent(TodoListSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
