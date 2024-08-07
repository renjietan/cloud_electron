import { Window } from '@doubleshot/nest-electron'
import { Injectable } from '@nestjs/common'
import { screen, dialog, BrowserWindow, shell } from 'electron'
import fs from "fs"
// import { User } from '../entities/User.entity'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class AppService {
  constructor(
    @Window() private readonly mainWin: BrowserWindow,
    // @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {
    this.mainWin.webContents.setWindowOpenHandler(({ url }) => {
      shell.openExternal(url)
      return { action: 'deny' }
    })
  }

  public getScaleFactor(): number {
    const { scaleFactor } = screen.getPrimaryDisplay()
    return scaleFactor
  }

  public async saveImageToFile(image: string) {
    const { canceled, filePath } = await dialog.showSaveDialog(this.mainWin, {
      title: 'Save image',
      defaultPath: 'paint.png',
      filters: [
        { name: 'Images', extensions: ['png', 'jpg', 'jpeg'] },
      ],
    })

    if (canceled) {
      return "canceled"
    }

    // 从 url 形式的 image base64 转换为 buffer
    const buffer = Buffer.from(image.replace(/^data:image\/\w+;base64,/, ""), 'base64')
    fs.writeFileSync(filePath, buffer)
    return "success"
  }

  public async signIn(data: {username: string, password: string}) {
    // const user = this.userRepository.findOneBy(data)
    // return 'user'
    return 'success'
  }
}
