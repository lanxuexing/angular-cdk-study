import { Clipboard } from '@angular/cdk/clipboard';
import { Component } from '@angular/core';

@Component({
  selector: 'app-copy',
  templateUrl: './copy.component.html',
  styleUrls: ['./copy.component.scss']
})
export class CopyComponent {
  value = `Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not ` +
          `a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord ` +
          `of the Sith, so powerful and so wise he could use the Force to influence the ` +
          `midichlorians to create life… He had such a knowledge of the dark side that he could ` +
          `even keep the ones he cared about from dying. The dark side of the Force is a pathway ` +
          `to many abilities some consider to be unnatural. He became so powerful… the only ` +
          `thing he was afraid of was losing his power, which eventually, of course, he did. ` +
          `Unfortunately, he taught his apprentice everything he knew, then his apprentice ` +
          `killed him in his sleep. Ironic. He could save others from death, but not himself.`;

  constructor(
    private clipboard: Clipboard
  ) { }

  copy() {
    this.clipboard.copy(this.value);
  }

  copyLongText() {
    // clipboard又一个预加载文本的方法beginCopy，此方法返回一个PendingCopy对象
    const pending = this.clipboard.beginCopy(this.value);
    let remainingAttempts = 3;
    const attempt = () => {
      const result = pending.copy();
      console.log('这里。。。', result);
      if (!result && --remainingAttempts) {
        console.log('来了', remainingAttempts);
        setTimeout(attempt);
      } else {
        // 记住在完成后一定要销毁!
        pending.destroy();
      }
    };
    attempt();
  }

}
