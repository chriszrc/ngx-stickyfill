import { NgxStickyfillDirective } from './ngx-stickyfill.directive';
import { MockElementRef } from '../../test/mock/mock-element-ref';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ElementRef, Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

/**
 * Test Component
 */
@Component({
  template: `
    <div ngxStickyfill></div>
    <div class="nostickyfill"></div>
  `
})
class TestComponent{}

describe('NgxStickyfillDirective', () => {

  let fixture:ComponentFixture<TestComponent>;
  let stickyDivs:DebugElement[];
  let plainDivs:DebugElement[];

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [ NgxStickyfillDirective, TestComponent ],
    })
    .createComponent(TestComponent);

    fixture.detectChanges(); // initial binding

    // all elements with an attached directive
    stickyDivs = fixture.debugElement.queryAll(By.directive(NgxStickyfillDirective));

    // divs without the directive
    plainDivs = fixture.debugElement.queryAll(By.css('div.nostickyfill'));
  });


  it('should create an instance', () => {
    const directive = new NgxStickyfillDirective(new MockElementRef(stickyDivs[0]));
    expect(directive).toBeTruthy();
  });

  it('should add the sticky position class to divs with the directive', ()=>{
    expect(stickyDivs.length).toBe(1);
    expect(stickyDivs[0].nativeElement.style.position).toBe("sticky");
  })

  it(`shouldn\'t affect divs without the directive`, ()=>{
    expect(plainDivs.length).toBe(1);
  })

  //TODO
  xit(`any way to simulate an old browser where we would expect stickyfilljs to actually be called?`,()=>{

  })

});
